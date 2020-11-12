import React from 'react';
import './todo.css';

const Todo = props => {
  const {
    todo,
    toggleCompleted
  } = props;

  const toggleCompletedItem = () => {
    toggleCompleted(todo);
  };

  return (
    <div
      className={`todo${todo.completed ? ' completed' : ''}`}
      onClick={toggleCompletedItem}
    >
      {todo.item}
    </div>
  );
};

export default Todo;