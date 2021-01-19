import React from 'react'




const Todo = ({todo, completedTodo}) => {
    return (
        <div onClick={ () => completedTodo(todo.id)} className = {`task${todo.completed ? 'completed' : ''}`}>
            <p>{todo.todo}</p>
        </div>
    )
}

export default Todo;