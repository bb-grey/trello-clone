import { DragItem } from "../DragItem";

export const isHidden = (
  draggedItem: DragItem | undefined,
  id: string,
  itemType: string,
  isPreview: boolean | undefined
): boolean => {
  console.log("DraggedItem: ", draggedItem);
  console.log("isPreview: ", isPreview);
  console.log("id: ", id);
  console.log("type: ", itemType);
  const val = Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.id === id &&
      draggedItem.type === itemType
  );
  console.log("TORF: ", val);
  return val;
};
