import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm dispatch={dispatch} newTodo={newTodo} setNewTodo={setNewTodo} />
        </div>       
        <TodoList state={state} dispatch={dispatch} />  
    </div>
  );
};

export default App;