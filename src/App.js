import React, { useReducer, useState } from 'react';
import TodoForm from './components/todo-form';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="title">TO DO NOW LIST</h1>
      <TodoForm />
    </div>
  );
}

export default App;
