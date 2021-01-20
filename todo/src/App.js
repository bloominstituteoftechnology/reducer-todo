import React from 'react'


import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const todos = [{
    title: "todo a",
    id: 0,
    completed: false,
  },{
    title: "todo b",
    id: 1,
    completed: false,
  },{
    title: "todo c",
    id: 2,
    completed: false,
  }]
  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList todos={todos}/>
      <TodoForm />

    </div>

  );
}

export default App;
