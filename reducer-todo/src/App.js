import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

import { reducer, todo } from './reducers/todoReducer';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
