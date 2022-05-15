import React from "react";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./components/AppStateContext";
import Column from "./components/Column";
import { AppContainer } from "./styles";

const App = () => {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
