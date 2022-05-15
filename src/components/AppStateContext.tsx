import React, { createContext, useContext } from "react";

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
};

interface AppState {
  lists: List[];
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
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
