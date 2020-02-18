import React, { useReducer } from 'react';
import Todo from './components/Todo';
import './App.css';


const App =() => {
  return (
  <div className='App'>
    <h1>What To Do?</h1>
    <Todo />

  </div>
  );
};


export default App;
