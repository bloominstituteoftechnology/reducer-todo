import React, { useState, useReducer } from "react";
import { initialState, taskReducer } from '../reducers/reducer';
import { ADD_TODO, DELETE_TODO  } from '../reducers/reducer';




const TodoForm = () => {
const [ todo, setTodo] = useState ("");
const [ state, dispatch ] = useReducer(taskReducer, initialState)
   
const handleChanges = event => {
    setTodo(event.target.value);
};

const submitForm = event => {
    event.preventDefault();
    dispatch({
        type: ADD_TODO,
        payload: todo
      });
      setTodo("");
};

const handleDelete = event => {
    event.preventDefault();
    dispatch({ type: DELETE_TODO });
};



return (        
        <form onSubmit={submitForm}>
          
            <label className="search-text"htmlFor= "todo">Enter To Do {state.todo}</label> 
            <input 
            className="search-text"
            type="text"
            name="newToDo"
            value={todo}
            onChange={handleChanges}
            />

            <button className="submit-btn">Submit</button>
            <button className="delete-btn" onClick = {handleDelete} >Clear</button>
        </form> 
        ) 
}  



export default TodoForm;