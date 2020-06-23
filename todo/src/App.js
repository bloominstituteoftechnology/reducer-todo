import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, theReducer } from "./reducer";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

function App() {
  const [state, dispatch] = useReducer(theReducer, initialState);
  const addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const deleteItem = (e) => {
    dispatch({ type: "DELETE_TODO" });
  };

  const toggleItem = (itemId) => {
    dispatch({ type: "TOGGLE_ITEM", payload: itemId });
  };
  return (
    <div className="App">
      <TodoForm addItem={addItem} />
      <TodoList list={state} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
