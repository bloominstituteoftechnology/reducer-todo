import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { tasks } from './components/taskdata';

function App() {
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoList />
      <TodoForm
        tasks={tasks} />

    </div>
  );
}

export default App;
