import React, {useState, useReducer} from 'react';
import './App.css';
import {initialState, reducer} from "./reducers/reducer";




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList />
    </div>
  );
}

export default App;
