import React, { useState } from "react";

const TodoForm = ({ addNewTask }) => {


  const [newTaskName, setNewTaskName] = useState('');

  const handleChanges = e => {
    setNewTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    addNewTask(newTaskName);
    setNewTaskName('');
  }

  console.log(newTaskName);

  return (
    <div>
      <p>Todo Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          placeholder="Add new task"
          value={newTaskName}
          onChange={handleChanges}
          />
          <button type="Submit">Add</button>
          </form>
    </div>
  )
}

export default TodoForm;
