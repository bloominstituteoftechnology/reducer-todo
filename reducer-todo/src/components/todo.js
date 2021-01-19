import React from 'react'
import {ACTIONS}from "../components/todoform"
export default function todo({todo,dispatch}) {
    return (
        <div>
        <span style={{color: todo.complete ? "#AAA": "#000"}}>
            {todo.name}
        </span>
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload: P})}>
                Toggle
            </button>
            <button>Delete</button>
        </div>
    )
}
