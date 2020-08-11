import React from "react";

export const Todo = (props) => {
  const { item, clickHandler } = props;

  return (
    <div
      onClick={() => clickHandler(item.id)}
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      {item.item}
    </div>
  );
};

export default Todo;