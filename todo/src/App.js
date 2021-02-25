import './App.css';
import AppBar from './components/AppBar';
import Todos from './components/Todos';
import AppBarBottom from './components/AppBarBottom';
import React, { useState, useReducer, createReducer } from 'react';
import todoReducer from './reducers/todoReducer';
import { initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("INITIALIZING TODOS: ", state.todos);

  return (
    <div className='app-background'>
      <div className="App">

        {/* <Header/> */}
        <AppBar/>

        <Todos state={state} dispatch={dispatch} />

        {/* <AppBarBottom/> */}

      </div>
    </div>
  );
}

export default App;
