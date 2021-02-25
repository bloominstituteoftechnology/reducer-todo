import "./App.css";
import React, { useState, useReducer } from "react";
import TodoForm from "./components/TodoForm"

function App() {

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
