import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

import { reducer, todo } from './reducers/todoReducer';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
