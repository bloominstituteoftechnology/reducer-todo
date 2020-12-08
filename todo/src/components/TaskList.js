import React from 'react'
import Task from './Task'


const TaskList = ({finishTask, taskList}) => {
    return (
        <div>
           {taskList.map(task => <Task key={task.id} task={task} completeTask={finishTask}/>)} 
        </div>
    )
}

export default TaskList
