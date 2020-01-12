import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Reducer ToDo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
