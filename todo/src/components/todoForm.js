import React, { useState } from 'react';
import { Button } from '../Styles/styles';

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
      <Button type="submit">Add Todo</Button>
      <Button onClick={handleClear}>Clear Completed</Button>
    </form>
  );
};

export default TodoForm; 