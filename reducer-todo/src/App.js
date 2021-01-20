import {useReducer, useState } from 'react';
import React from 'react'
import './App.css';
import TodoForm from './TodoForm';
import Todos from './Todos';
import {initialState, reducer} from './reducer';


function App() {
  
  const [ state,dispatch ]=useReducer(reducer,initialState);
  // console.log(state);
  return (
    <div className="App">
      <TodoForm/>
      <Todos todos={state} />
    </div>
  );
}

export default App;
