import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lisa's Very Important Tasks!</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
