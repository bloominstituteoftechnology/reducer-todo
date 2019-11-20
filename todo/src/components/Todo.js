import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer.js';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [newTodo, setNewTodo] = useState();

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return(
    <div>
      {!state.editing ? (
        <p>
          {state.title}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
          />
        </p>
      ) : (
      <form>  
        <input 
          className='input'
          type='text'
          name='newTodo'
          value={newTodo}
          onChange={handleChanges} 
        />
        <button
          onClick={() => {
            dispatch({ type: 'SET_TODO', payload: newTodo });
            setNewTodo('');
            dispatch({ type: "TOGGLE_EDITING" })
          }}
        >
          Add Todo
        </button>
        <h2>Todo List</h2>
        <p>
          {state.item}
        </p>
      </form>
      )}</div>
  )
}

export default Todo;