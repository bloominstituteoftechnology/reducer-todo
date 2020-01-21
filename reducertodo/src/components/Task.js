import React from 'react'

const Task = ({task, toggleCompleted }) => {


    return (
        <div>
            <h1>{task.task} {task.id} </h1>
            <button onClick={ () => toggleCompleted(task.id)}> </button>
        </div>
    )
}

export default Task
