import React from "react";


const Todo = (props) => {

    const handleClick = () => {
        props.handleToggleItem(props.taskItem.id);
    }
  return (
    <div
      onClick={handleClick}
      className={`task${props.taskItem.completed ? " completed" : ""}`}
    >
      <p>{props.taskItem.item}</p>
    </div>
  );
};

export default Todo;