import React, { useState, useReducer } from 'react';
import Todo from "./components/Todo";
import {reducer, initialState, ACTIONS } from "./reducers/TodoReducers";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
    setName('')
  }

  return (
    <>
    <div className="App">
      <Todo />
    </div>
    </>
  );
}

export default App;
