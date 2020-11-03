import React, { useState, useRender } from 'react';
import reducer from './reducers'
import './App.css';
import { setNewTodo, setClearTodo, setSelectTodo, setEditTodo } from './actions'

const Todo = () => {
  const initialState = {
    newTodo: "",
    editTodo: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {

  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
