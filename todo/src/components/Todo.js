import React from 'react'

const Todo = (props) => {
    const {todo} = props
    return(<li>{todo.task}</li>)
}

export default Todo