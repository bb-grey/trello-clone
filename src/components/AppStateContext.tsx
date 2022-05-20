import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { DragItem } from "../DragItem";
import { moveItem } from "../utils/moveItem";

const appData: AppState = {
  lists: [
    { id: "1", text: "To Do", tasks: [{ id: "t1", text: "Mern" }] },
    {
      id: "2",
      text: "In Progress",
      tasks: [{ id: "t2", text: "Learn TypeScript" }],
    },
    { id: "3", text: "Done", tasks: [{ id: "t3", text: "JavaScript" }] },
  ],
  draggedItem: undefined,
};

interface AppState {
  lists: List[];
  draggedItem: DragItem | undefined;
}
export interface List {
  id: string;
  text: string;
  tasks: Task[];
}
export interface Task {
  id: string;
  text: string;
}

interface AppStateContextProps {
  state: AppState;

  dispatch(action: Action): void;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

type Action =
  | { type: "ADD_List"; payload: string }
  | { type: "MOVE_LIST"; payload: { dragIndex: number; hoverIndex: number } }
  | { type: "ADD_TASK"; payload: { text: string; taskId: string } }
  | { type: "SET_DRAGGED_ITEM"; payload: DragItem | undefined };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_List": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
        lists: state.lists.map((l) => {
          if (l.id === action.payload.taskId) {
            return {
              ...l,
              tasks: [
                ...l.tasks,
                {
                  id: uuid(),
                  text: action.payload.text,
                },
              ],
            };
          }
          return l;
        }),
      };
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    case "SET_DRAGGED_ITEM": {
      return { ...state, draggedItem: action.payload };
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
