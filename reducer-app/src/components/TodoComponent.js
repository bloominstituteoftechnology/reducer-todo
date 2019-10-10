import React from 'react';

const Todo = props => {
  const {toggleComplete} = props;
  const { id, item, completed } = props.todo;
console.log(props.todo)
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(id)}
    >
      {item}
    </li>
  );
};

export default Todo;