import React from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/ToDoForm';
import './App.css';

function App () {
  return (
    <div className="App">
      <TodoForm />
      <TodoItem />
    </div>
  )
}

export default App;
