import React from "react"

const Todo = props => {
    console.log('todo', props)
    return (
        <div 
        onClick={() => props.toggleTask(props.task.id)}
        className={`task${props.task.completed ? " completed" : ""}`}
        >
            <h3>{props.task.item}</h3>
        </div>
    )
}

export default Todo;