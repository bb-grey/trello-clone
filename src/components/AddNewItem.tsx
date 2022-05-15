import React, { useState } from "react";
import { AddItemButton } from "../styles";
import AddItemForm from "./AddItemForm";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  const _handleAddItem = (text: string) => {
    onAdd(text);
    setShowForm(false);
  };

  const _handleShowForm = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <AddItemForm onAdd={(text) => _handleAddItem(text)} />;
  }

  return (
    <AddItemButton dark={dark} onClick={_handleShowForm}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
