import React from "react";
import { Title } from "./Components/Title";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stateful Todo App</h1>
        {/* <Title /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
