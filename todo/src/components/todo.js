import React from "react";

const Todo = (props) => {
  const newStyle = () => {
    return {
      underLine: props.task.completed ? "line-through" : "none",
    };
  };

  return (
    <div id={newStyle()} onClick={() => props.toggleItem(props.task.id)}></div>
  );
};

export default Todo;
