import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppState } from "../components/AppStateContext";
import { DragItem } from "../DragItem";

export const useItemDrag = (item: DragItem) => {
  const { state, dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item,
    type: item.type,
    collect: (monitor) => {
      if (monitor.isDragging() && !state.draggedItem) {
        console.log("Dispatching...");
        dispatch({ type: "SET_DRAGGED_ITEM", payload: item });
      }
    },
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};
