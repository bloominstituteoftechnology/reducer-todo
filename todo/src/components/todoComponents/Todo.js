import React from 'react';

const Todo = props => {
    return (
        // console.log("this is todo props", props);
        <div className={`todo${props.todo.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTodo(props.todo.id)}>
            <p className='todo'>{props.todo.task}</p>
        </div>
    )
}

export default Todo;