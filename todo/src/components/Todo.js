import React from 'react'

const Todo = (props) => {
    const {todo, handleToggleCompleted} = props;

    const handleClick = () => {
        handleToggleCompleted(todo.id)
    }

    return(<li onClick={handleClick} className={todo.completed ? 'completed' :""}>{todo.task}</li>)
}

export default Todo