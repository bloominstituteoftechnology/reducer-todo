import React from 'react';
const Todo = props => {
    return (
        <div onClick={props.handleToggle}>
            <span>{props.item.task}</span>
        </div>
    )
}

export default Todo