import React from "react";

const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = () => {
    dispatch({ type: "COMPLETED", payload: todo.id });
  };

  return (
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "Completed" : ""}`}
    >
      <p>{todo.item}</p>
    </div>
  );
};

export default Todo;
