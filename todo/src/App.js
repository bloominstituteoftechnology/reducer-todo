import React, { useState, useReducer } from 'react';
import './App.css';
import { todoReducer } from './Reducers/todoReducer';
import { initialState } from './Reducers/todoReducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newItem, setNewItem] = useState('');

  const handleChanges = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To Do List</h1>
        {state.item}
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
        <div>
          <input
            type='text'
            name="todoItem"
            value={newItem}
            onChange={handleChanges}
          />
          <button className='additem'>Add Todo Item</button>
          <div>
            <button className='clearitems'>Clear Completed</button>
          </div>
        </div>
      </header>
    </div>
  );

 
}

  

export default App;
