import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div onClick={() => props.toggleItem(props.todo.id)}>
      <p className={`todo ${props.todo.completed ? " completed" : ""}`}>
        {props.todo.name}
      </p>
    </div>
  );
};
export default Todo;
