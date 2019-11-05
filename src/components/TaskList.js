import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map(task => {
        return <Task task={task.item}/>
      })}
    </div>
  )
}

export default TaskList;