import React from 'react';
import { ACTIONS } from '../App'

export default function Todo({ todo, dispatch }) {
    return (
        <>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id:todo.id }})}>
            Toggle
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id:todo.id }})}>
            Delete
        </button>
        </>
    )
}