import React from 'react';

const Todo = props => {

    return (
        <div
            onClick={() => props.dispatch({type: 'TOGGLE_TODO', payload: props.task.id})}
            className={`${props.task.completed ? "completed" : ""}`}
        >
            <p>{props.task.item}</p>
        </div>
    );
    
};

export default Todo;

{/* <div
className={`item${props.task.completed ? ' completed' : ''}`}
onClick={() => props.toggleItem(props.todo.id)}
>
</div> */}