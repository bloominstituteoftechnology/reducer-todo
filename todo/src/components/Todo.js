import React from 'react';
import { ACTIONS } from '../App'

export default function Todo({ todo, dispatch }) {
    return (
        <>
        <span style={{ color: todo.complete ? '#4f4f4f' : '#000'}}>{todo.name}</span>

        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id:todo.id }})}>
            Mark as Complete
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id:todo.id }})}>
            Clear Completed
        </button>
        
        </>
    )
}