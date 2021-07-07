import React, { useReducer } from 'react';
import { todoReducer, todo } from './reducers/todoReducer';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';
import './reducers/Todo.css';



function App() {
  const [state, dispatch] = useReducer(todoReducer, todo)
  // console.log("in app.js", state);


  return (
    <div className="App">
      <header>My Todo App!</header>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;