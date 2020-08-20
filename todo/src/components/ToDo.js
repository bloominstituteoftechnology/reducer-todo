import React from 'react';
import { actions } from '../reducers/indexReducer'

export default function ToDo({todo, dispatch}) {

    return (
        <div>
            <span style = {{color: todo.complete ? '#AAA' : "#000"}}>
                {todo.name}
            </span>
            <button onClick={()=> dispatch({type: actions.TOGGLE_TODO, payload: {id: todo.id}})}>
                Complete
            </button>
            <button onClick={()=> dispatch({type: actions.DELETE_TODO, payload: {id: todo.id}})}>
                Delete
            </button>
            
        </div>
    )
}
