import React, { useReducer } from 'react';
import './App.css';

// import Todo Components

// import initialState and recuder from todoReducer

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
  }

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id })
  }

  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
