import React from "react";
import "./App.css";
import TodoList from "./Todos/TodoList";

function App() {
  return (
    <div className="outside">
      <div className="App">
        <h1>Reducer ToDo</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
