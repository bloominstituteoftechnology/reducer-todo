import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>TO-DO LIST</h1>
      </div>
      <br />
      <Todo />
    </div>
  );
}

export default App;
