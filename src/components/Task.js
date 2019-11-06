import React from 'react';

const Task = (props) => {
  return (
    <div>
      {!props.task.editing ?
        <> 
          <li 
            className={props.task.completed ? 'completed' : null}
            onClick={(e) => props.markCompleted(props.task)}>
            {props.task.item}  
          </li> 
          <i className="far fa-edit" onClick={() => props.editTask(props.task)}></i> 
          <i className="far fa-trash-alt" onClick={() => props.deleteTask(props.task)}></i>
        </> :
        <form onSubmit={props.addEditedTask(props.task)}>
          <input 
            type= 'text'
            name= 'editedTask'
            onChange={props.editChangeHandler}
            value={props.task.item}
          />
          <button type='submit'>Done</button>
        </form>
    }
      
    </div>
  )
}

export default Task