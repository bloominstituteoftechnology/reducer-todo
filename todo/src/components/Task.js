import React from 'react'

const Task = ({task, completeTask}) => {
    return (
        <div onClick={() => completeTask(task.id)} className={task.completed ?  'completed' : ''}>{task.task}
        </div>
    )
}

export default Task
