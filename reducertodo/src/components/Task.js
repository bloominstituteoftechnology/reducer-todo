import React from 'react'

const Task = ({ task, toggleCompleted }) => {
 
    
    return (
        <div>
            <h1>{task.task}  {task.completed ? <span>done</span> : <span>unfinished</span>}</h1>
            <button onClick={() => toggleCompleted(task.id)}> toggle me </button>
        </div>
    )
}

export default Task
