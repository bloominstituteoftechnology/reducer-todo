import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            <h1>{props.item.item}</h1>
        </div>
    )
}

export default TodoItem;