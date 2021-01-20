import {useReducer, useState } from 'react';
import React from 'react'
import './App.css';
import TodoForm from './TodoForm';
import Todos from './Todos';
import {initialState, reducer} from './reducer';


function App() {
  
  const [ state,dispatch ]=useReducer(reducer,initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <Todos todos={state} />
    </div>
  );
}

export default App;
