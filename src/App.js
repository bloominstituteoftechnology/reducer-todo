import React from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/ToDoForm';

function app () {
  return (
    <div className="App">
      <TodoForm />
      <TodoItem />
    </div>
  )
}

export default app;
