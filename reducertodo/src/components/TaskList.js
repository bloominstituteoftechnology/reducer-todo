import React, { useState, useReducer } from "react";
import { initialState, toDoReducer } from '../reducers/reducer'

export const TaskList = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState)
    const [newTask, setNewTask] = useState()
    console.log('reddddddd', state)


    return (
        <div>
            <h1>Todo List </h1>
        </div>    
    )

}