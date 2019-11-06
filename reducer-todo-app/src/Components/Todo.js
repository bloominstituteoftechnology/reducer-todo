import React from "react";
import "../../src/App.css";

const Todo = ({ item, id, completed, toggleTodo }) => {
  return (
    <div
      className={`item${completed ? " completed" : ""}`}
      onClick={() => toggleTodo(id)}
    >
      <p>{item}</p>
    </div>
  );
};

export default Todo;
