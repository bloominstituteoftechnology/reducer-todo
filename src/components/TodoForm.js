import React, { useState, useReducer } from "react";
import { initialState, taskReducer } from '../reducers/reducer';



const TodoForm = () => {
const [ todo, setTodo] = useState ();
const [ state, dispatch ] = useReducer(taskReducer, initialState)
   
const handleChanges = event => {
    setTodo(event.target.value);
};

const handleSubmit = event => {
    event.preventDefault();
    setTodo(" ");
    dispatch({ type: "ADD_TODO", payload: todo || state.todo })
    dispatch({ type: "TOGGLE_TODO"})
}

const handleDelete = event => {
    event.preventDefault();
    dispatch({ type: "DELETE_TODO" });
};


return (        
        <form onSubmit={handleSubmit}>
            <label className="search-text"htmlFor= "task">Enter To Do {state.todo}</label> 
            <input 
            className="search-text"
            type="text"
            name="newToDo"
            value={todo}
            onChange={handleChanges}
            />

            <button className="submit-btn" >Submit</button>
            <button className="submit-btn" onClick = {handleDelete} >Clear</button>
        </form> 
        ) 
}  



export default TodoForm;