import React from 'react'
import Todo from './Todo'

const ToDoList = (props) => {
    return (
        <div className='todoList'>
            <h3>ToDo List</h3>
            <ul>
                {
                    props.todos.map(todo => {
                        return(<Todo todo={todo} />)
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;