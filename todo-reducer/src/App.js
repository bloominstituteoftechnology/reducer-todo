import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer.js'

import './App.css';

function App() {
  const [state, dispatch ] = useReducer( todoReducer, initialState);
  console.log(state)
  return (
    <div className="App">
      {state.map(todo => ( 
        <h1 key={todo.id}> {todo.name} </h1>
      ))}
    </div>
  );
}

export default App;
