import React, { useReducer, useState } from "react";
import { reducer } from "./reducers/reduce";
import { initialState } from "./reducers/reduce";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");
  return (
    <div className="App">
      <header className="App-header">TO DO</header>
      <TodoList list={todos} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
