import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => (
                <Todo 
                key= {task.id}
                name= {task.item}
                />
            ))}
        </div>
    )
}

export default TodoList