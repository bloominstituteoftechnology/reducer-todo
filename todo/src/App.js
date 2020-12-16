import React, { useState, useReducer } from 'react';
import './App.css';
import { todoReducer } from './Reducers/todoReducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To Do List</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );

 
}

  

export default App;
