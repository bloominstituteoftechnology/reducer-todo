import React, { useState } from 'react';

//set as a function because dispatch was not passing correctly
//Note to self - break this crap up. Do NOT try to put it all in one file. Makes debugging hell. 
//Notice we DO NOT pass useReducer here. That is set up in the ToDoList.js
export default function TodoForm({dispatch}) {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
        setNewTodo("");
    }

     const deleteTodo = e => {
        e.preventDefault();
        dispatch({
            type: 'DELETE_TODO',
        })
    }

    return (
        <div>
            <form>
                <label>
                    To Do: 
                </label>
                <input name='todo' onChange={handleChanges} value={newTodo} />
                <button onClick={submitForm}>Add Todo</button>
                <button onClick={deleteTodo}>Delete todo</button>
            </form>
        </div>
    )

}
