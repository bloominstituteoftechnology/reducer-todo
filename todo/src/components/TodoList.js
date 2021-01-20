import React from 'react'
import Todo from './Todo'

const ToDoList = (props) => {
    const handleClick = () => {
        props.handleClearCompleted();
    }
    return (
        <div className='todoList'>
            <h1>ToDo List</h1>
            <ul>
                {
                    props.todos.map(todo => {
                        return(<Todo key={todo.id} todo={todo} handleToggleCompleted={props.handleToggleCompleted}  />)
                    })
                }
            </ul>
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;