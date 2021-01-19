import React from 'react'
import { ACTIONS }from "../components/action"

export default function Todo({todo,dispatch}) {
    return (
        <div>
        <span style={{color: todo.complete ? "#AAA": "#000"}}>
            {todo.name}
        </span>
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todo.id} })}>
                TOGGLE TODO
            </button>
            ADD TODO
            <button onClick={()=> dispatch({type: ACTIONS.ADD_TODO, payload: {id:todo.id}})}> ADD TODO</button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id:todo.id}})}>DELETE</button>
        </div>
    )
}
