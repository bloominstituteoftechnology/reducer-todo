import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <p key={props.id}
            onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETED', payload: !props.completed, payload2: props.id})}
            className={`Task${props.completed ? ` completed` : ''}`}
            >
                {props.task}
            </p>
        </div>
    )
}

export default Todo;

