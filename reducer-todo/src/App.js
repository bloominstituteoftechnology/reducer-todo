import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Todo List</h2>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
