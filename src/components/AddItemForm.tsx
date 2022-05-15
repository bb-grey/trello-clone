import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import useFocus from "../utils/useFocus";

interface AddItemFormProps {
  onAdd(text: string): void;
}

const AddItemForm = ({ onAdd }: AddItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default AddItemForm;
