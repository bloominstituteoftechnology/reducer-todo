import React from 'react';
import './App.css';
// components
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Elysia's To Do List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
