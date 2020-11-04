import React from "react";

export default function Todo({ todo, toggle }) {
  return (
    <div className="li-div">
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      key={todo.id}
      onClick={toggle}
    >
      {todo.item}
    </li>
    </div>
  );
}