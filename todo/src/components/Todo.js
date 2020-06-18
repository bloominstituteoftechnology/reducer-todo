import React from 'react';
import "../css/index.css";

const Todo = props => {
    console.log(props.todo);
  return (
    <div
      className={`item${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id})}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;