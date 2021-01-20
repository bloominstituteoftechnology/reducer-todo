import React  from 'react'
import { ACTIONS }from "./action"


export default function Todo({todo,dispatch}) {


    
    return (
        <>
        <div>
        
      <span  className={`item ${todo.complete ? ' complete' : ''}`} >   
            {todo.name}
        </span> 
            <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todo.id} })}>
                TOGGLE TODO
            </button>
        
            
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id:todo.id}})}>DELETE TODO</button>
        </div>
        </>
    )
}
