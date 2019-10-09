import React, { useReducer } from 'react';

const TodoItem = (props) => {
    return (
        <div
            className={`item ${props.item.completed ? 'completed' : '' }`}
            onClick={() => 
                props.dispatch({ type: 'TOGGLE', payload: props.item })}>
            
        <h1>{props.item.item}</h1>
        </div>
    )
}

export default TodoItem;