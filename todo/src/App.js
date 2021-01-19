import React from "react";
import TodoForm from "./components/TodoForm";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
