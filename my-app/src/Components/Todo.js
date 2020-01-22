import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.completed ? '-completed' : ''}`}
      onClick={props.handleComplete()}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default Todo;