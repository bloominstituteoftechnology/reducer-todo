import React, { useReducer } from 'react';
import './App.css';
// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// reducers
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('initial state', state);


  return (
    <div className="App">
      <header>
        <h1>Elysia's To Do List</h1>
      </header>
      <TodoForm />
      <TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
