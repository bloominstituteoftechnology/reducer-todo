import React from 'react';
import '../App.css'

const TodoList = (props) => {

    return (<ul>{props.todoList.todos.map(todo => {
        console.log("todoList todo", todo)
        return <li
            className={todo.completed ? "true" : "false"}
            key={todo.id}
            onClick={() => {
                props.dispatch({ type: 'TOGGLE_TODO', payload: todo })
            }}>
            {todo.item}
        </li>
    })}</ul>)
}

export default TodoList;