import React, {useState, useReducer} from "react";
import {initialState, reducer} from "../reducers/Reducer";
import { dispatch } from "rxjs/internal/observable/range";

export const Todo = () => {
    const [todo, setTodo] = useState("");

    const handleChanges = e => {
        setTodo(e.target.value)
    }
     
    return(
     <form
        classname='todo-form'
        onSubmit={() => {
            dispatch({ type: 'ADD_TODO', payload: todo})
        }}
        >
        <input type='text' name='task' value={todo} onChange={handleChanges}/>      
        <button type='submit'>add to list</button>
    </form>
    )}
    