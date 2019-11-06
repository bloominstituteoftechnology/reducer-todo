import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map(task => {
        return <Task key={task.id} task={task} markCompleted={props.markCompleted}/>
      })}
    </div>
  )
}

export default TaskList;