import React from "react";
import "../App.css";

const Todo = ({ todo, handleCompleted }) => {
  console.log("Todojs: ", todo);

  console.log("todo");

  const handleClick = () => {
    handleCompleted(todo.id);
  };
  return (
    <div
      className={todo.completed === true ? "todo completed" : "todo"}
      onClick={handleClick}
    >
      <div>{todo.item}</div>
    </div>
  );
};

export default Todo;
