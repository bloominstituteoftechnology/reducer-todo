import React, { useReducer } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

import './App.css';
import { Reducers } from './reducers/Reducers';

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
        <Reducers />
        <Todo />
        <AddTodo />

    </div>
  );
}

export default App;
