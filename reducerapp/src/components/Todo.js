  
import React from 'react';

const Todo = ({ task, id, completed, toggleCompleted}) => {
  return (
    <div className={'todo' + (completed ? ' completed' : '')}
      onClick = {() => toggleCompleted(id)}
    >
      {task}
    </div>
  )
}

export default Todo;