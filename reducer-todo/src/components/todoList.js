import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const todoList = () => {

    const[todo, dispatch] = useReducer(todoReducer, initialState)

    const [newTodo, setNewTodo] = useState('')

    const clearCompleted = () => {

     
    }




    const handleChanges = (e) => {
        setNewTodo([...todo],
            {
            todo:e.target.value,
            completed:false,
            id:Date.now(),
            })
    }

    return(

        <div>
            
            <input
            type = "text"
            name = "newTodo" 
            placeholder = "add todo"
            value = {newTodo}
            onChange = {handleChanges}

            />
            <button onClick = {() =>dispatch({type:'ADD_TODO', payload:newTodo})}>Add todo</button>
            <button onClick = {()=>dispatch({type:'TOGGLE_TODO'})}>Completed</button>
            <button onClick = {() => dispatch({type:'CLEAR_COMPLETED'})}>Delete</button>
            
        </div>
    )
}

export default todoList;

























