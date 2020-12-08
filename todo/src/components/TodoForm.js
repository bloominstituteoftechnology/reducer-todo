import React, { useState } from "react";

const TodoForm = (props) => {

    const [ input, setInput ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddItem(input);
    setInput("")
  };

  const handleChange = (e) => {
      setInput(e.target.value)
  }

  const handleClearTasks = (e) => {
    e.preventDefault();
    props.handleClearTasks();
  };

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          type='text'
          name='taskInput'
        />
        <button className='submit'>Add</button>
      </form>
      <form>
        <button className='clear' onClick={handleClearTasks}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default TodoForm;