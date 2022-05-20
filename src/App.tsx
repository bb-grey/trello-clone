import React from "react";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./components/AppStateContext";
import Column from "./components/Column";
import { AppContainer } from "./styles";

const App = () => {
  const { state, dispatch } = useAppState();

  const _addListItem = (text: string) => {
    dispatch({ type: "ADD_List", payload: text });
  };

  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column text={list.text} key={list.id} index={index} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={_addListItem} />
    </AppContainer>
  );
};

export default App;
