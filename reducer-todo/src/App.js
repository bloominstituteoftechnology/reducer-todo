import React, { useReducer } from 'react';

import {reducer, initialState} from './reducers/reducer';

import Todos from './components/Todos';

import './App.css';

const App = () => {
  const [state] =useReducer(reducer, initialState);
  
  
  return (
    <div className="App">
      <h1>Todo List! 📑</h1>
      <Todos todos={state.todoList}/>
    </div>
  );
}

export default App;
