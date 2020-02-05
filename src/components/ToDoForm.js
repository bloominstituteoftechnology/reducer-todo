import React, { useState } from "react";

const ToDoForm = props => {
  const [task, setNewTask] = useState("");

  const handleChanges = e => {
    setNewTask(
      /* ...task, */
      e.target.value
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewTask(task);
  };

  return (
    <section className='form1'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          onChange={handleChanges}
          type='text'
          name='task'
          value={task}
          placeholder={"Enter New Errand"}
        />
        <button className='btn1'>New Task</button>
      </form>
      <button onClick={props.clearCompleted} className='btn2'>
        Clear Complete
      </button>
    </section>
  );
};

export default ToDoForm;
