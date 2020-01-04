import React, { useState, useReducer } from 'react';
import './App.css';

// import Todo Components

// import initialState and recuder from todoReducer

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ input, setInput ] = useState();

  const handleChanges = (e) => {
    e.preventDefault();
    setInput('')
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
