import React from 'react';

const Todo = props => {
  const { id, tglComplete, todo, completed } = props;
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => tglComplete(id)}
    >
      {todo}
    </li>
  );
};

export default Todo;