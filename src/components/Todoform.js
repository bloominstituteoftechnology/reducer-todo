import React, { useState, useReducer } from "react";
import Todo from './Todo';
import { reducer, initialState } from "../reducers/reducer";

const TodoForm = props => {
    const [newTodo, setNewTodo] = useState('');
    const[state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('hello', newTodo)
        dispatch({ type: 'ADD_TODO', payload: newTodo})
    };
    const handleDelete = e =>{
        e.preventDefault();
        dispatch({type: "DELETE_TODO", payload: newTodo})

    };
  return (
    <div>
      <form>
        <div className='form-container'>
        <input
          id='newTodo'
          type="text"
          name='newTodo'
          value={newTodo}
          onChange={handleChanges}
        />
      <button onClick={handleSubmit}>Add Task</button>
      <button onClick={handleDelete}>Completed Task</button>
      </div>
      </form>
      <Todo id={state.id} dispatch={dispatch} state={state} newTodo={newTodo}/>
    </div>
  );
};
export default TodoForm;