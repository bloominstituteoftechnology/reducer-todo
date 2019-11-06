import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map(task => {
        return <Task 
          key={task.id} 
          task={task} 
          markCompleted={props.markCompleted} 
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          addTask={props.addTask}
          editChangeHandler={props.editChangeHandler}
          editedTask={props.editedTask}
          addEditedTask={props.addEditedTask}
          newTask={props.newTask}
        />
      })}
    </div>
  )
}

export default TaskList;