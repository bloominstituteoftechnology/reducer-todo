import React, { useReducer } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm'

import { initialState, reducer } from './reducers/todoReducer';
import './App.css';

function App() {

  const [state, dispatch ] = useReducer(reducer, initialState)
  console.log('Reducer State from App: ', state)

  return (
    <div className="App"> 
      <h1>Reducer Todo App</h1>
      <TodoForm />
      <Todo state={state} />
    </div>
  );
}

export default App;
