import React from 'react'


const Todo = props => {
    const { toggle } = props
    console.log(props)

    return (
    <h3
    onClick={() => toggle(props.item.id)}
    className={`list-item ${props.item.completed === true ? "completed" : ""}`}
    >{props.item.item}</h3>
    )
}

export default Todo