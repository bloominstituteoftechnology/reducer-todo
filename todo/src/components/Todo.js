import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer.js';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [newTodo, setNewTodo] = useState();

  return(
    <form>  
      <input className='input' />
      {state.item}
    </form>
  )
}

export default Todo;