import React, { useReducer, useState } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{appState.item}</h1>
    </div>
  );
}

export default App;
