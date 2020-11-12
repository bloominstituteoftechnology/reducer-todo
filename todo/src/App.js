import React, { useReducer } from "react";

import TodoForm from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

import { initialState, reducer } from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("SV: App, App: checking state", state);
  const addToDo = (input) => {
    const newToDo = {
      todo: input,
      completed: false,
      id: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: newToDo });
  };

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" });
  };

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addToDo} />
      <button
        onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}
      >
        Clear Task
      </button>
    </div>
  );
}

export default App;