import React from 'react';

const Task = (props) => {
  return (
    <li 
      className={props.task.completed ? 'completed' : null}
      onClick={(e) => props.markCompleted(props.task)}>
      {props.task.item} <i className="far fa-trash-alt" onClick={() => props.deleteTask(props.task)}></i> 
    </li> 
  )
}

export default Task