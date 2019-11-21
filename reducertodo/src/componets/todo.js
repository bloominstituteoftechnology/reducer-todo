
import React from 'react';

const Todo = props => {
  const { id, toggleComplete, todo, completed } = props;
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(id)}
    >
      {todo}
    </li>
  );
};

export default Todo;