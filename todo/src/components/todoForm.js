import React, { useState } from 'react';

const TodoForm = props => {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(input);
    setInput('');
  };

  const handleClear = event => {
    event.preventDefault();
    props.clearCompleted();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button type="submit">Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm; 