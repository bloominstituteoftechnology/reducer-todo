import React from "react";
import { TodoListReducer, initialState } from "./Reducers/TodoListReducer";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stateful Todo App</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
