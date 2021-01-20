import React  from 'react'
import { ACTIONS }from "./action"


export default function Todo({dispatch,todos}) {

    
    return (
        <div>
        <span  className={`${todos.complete ? "complete" : ""}`}>
            {todos.name}
        </span>
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todos.id} })}>
                TOGGLE TODO
            </button>
            ADD TODO
            <button onClick={()=> dispatch({type: ACTIONS.ADD_TODO, payload: {id:todos.id}})}> ADD TODO</button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id:todos.id}})}>DELETE</button>
        </div>
    )
}
