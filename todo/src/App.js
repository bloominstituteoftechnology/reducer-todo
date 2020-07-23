import React, { useState, useReducer } from "react";
// import logo from "./logo.svg";
import "./App.css";

import todoList from "./Components/todoList";
import todoForm from "./Components/todoForm";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskInput, setTaskInput] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    setTaskInput(e.target.value);
  };

  const taskSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: taskInput });
  };

  const toggleItem = (item) => {
    dispatch({ type: "TOGGLE_ALL", payload: item });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ALL" });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <todoForm
          dispatch={dispatch}
          taskSubmit={taskSubmit}
          clearCompleted={clearCompleted}
          inputChange={inputChange}
        />
      </div>
      <todoList dispatch={dispatch} info={state} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
