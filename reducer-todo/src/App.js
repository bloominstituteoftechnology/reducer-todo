import React from 'react';
import './App.css';
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
        <h2>Todolist</h2>
        <TodoList/>
    </div>
  );
}

export default App;