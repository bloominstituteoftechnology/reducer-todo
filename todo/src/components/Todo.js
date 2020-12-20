import React from 'react';
import { ACTIONS } from '../reducers/reducer';

export default function Todo({ todo, dispatch }) {
    return (
        <div className="todo-items">
            <span onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})} style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>
                {todo.name}
            </span>
        </div>
    )
};