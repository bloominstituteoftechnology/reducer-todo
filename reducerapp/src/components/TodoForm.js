import React from "react";

const TodoForm = ({ task, addTodo, handleChange, clearCompleted }) => {
  
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(task);
  }

  const handleClear = event => {
    event.preventDefault();
    clearCompleted();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='task'
          value={task}
          placeholder='what tasks do you need to complete?!'
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
      <button onClick={handleClear}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoForm;