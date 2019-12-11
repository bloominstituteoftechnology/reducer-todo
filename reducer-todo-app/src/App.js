import React, { useState, useReducer } from 'react';
import './App.css';

// importing todo components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// import initialState and reducer from todoReducer
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  // setting up useReducer hook
  const [state, dispatch ] = useReducer(reducer, initialState);
  // setting up the useState
  const [input, setInput] = useState();

  // checking what is in the state
  // console.log(state)

  const handleChanges = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('')
  }

  return (
    <div className="App">
      <h1>Reducer Todo App</h1>
      <TodoForm state={state} input={input} handleChanges={handleChanges} dispatch={dispatch} handleSubmit={handleSubmit} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

