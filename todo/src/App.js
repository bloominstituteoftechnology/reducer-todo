import React from "react";
import Todo from "./components/TodoForm";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">TaskMaster</header>

      <TodoForm />
    </div>
  );
}

export default App;
