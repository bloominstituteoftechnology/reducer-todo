import React from 'react'


const Todo = props => {
    const { toggle } = props
    console.log(props)

    return (
    <h3
    onClick={() => toggle(props.todo.id)}
    className={`list-item ${props.todo.completed === true ? "completed" : ""}`}
    >{props.todo.item}</h3>
    )
}

export default Todo