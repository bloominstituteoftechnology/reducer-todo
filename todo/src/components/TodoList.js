import React from 'react'
import Todo from './Todo'

const ToDoList = (props) => {
    return (
        <div className='todoList'>
            <h1>ToDo List</h1>
            <ul>
                {
                    props.todos.map(todo => {
                        return(<Todo key={todo.id} todo={todo} />)
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;