import React from 'react';

const TodoItem = props => {
    const todo = props.todo;

    return (
        <div className={todo.completed ? 'todo completed' : 'todo'}
            onClick={() => {
                props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.index })
            }}>
            <p>{todo.item}</p>
        </div>
    )
}

export default TodoItem;