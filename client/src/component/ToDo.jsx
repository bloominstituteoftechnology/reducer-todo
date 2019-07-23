import React from 'react'

export default function ToDo(props) {
    return (
        <div
            className={`task${props.todo.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTask(props.todo.id)}
        >
            
            <p> { props.todo.task } </p>
        </div>
    )
}
