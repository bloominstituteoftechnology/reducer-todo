import React, { useState, useReducer } from 'react'
import { listReducer, initialState } from './reducers/reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <div>
      <form 
    //   onSubmit={e => {
    //     e.preventDefault()
    //     if (!input.value.trim()) {
    //       return
    //     }
    //     dispatch(addTodo(input.value))
    //     input.value = ''
    //   }}
      >
        <input />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm;
