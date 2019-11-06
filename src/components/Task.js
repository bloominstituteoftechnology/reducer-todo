import React from 'react';

const Task = (props) => {
  return (
    <li 
      className={props.task.completed ? 'completed' : null}
      onClick={(e) => props.markCompleted(props.task)}>
      {props.task.item}
    </li>
  )
}

export default Task