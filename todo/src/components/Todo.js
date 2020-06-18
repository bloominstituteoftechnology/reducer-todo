import React from 'react';
import "../css/index.css";

const Todo = props => {
    console.log(`In todo: ${props.todo}`)
  return (
    <div
      className={`item${props.todo.completed ? ' completed' : ''}`}
      //onClick={() => props.toggleTodo(props.todo.item.id)}
      onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED" })}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};
//dispatch({ type: "UPDATE_TITLE", payload: newTitleText })
export default Todo;