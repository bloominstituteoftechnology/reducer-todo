import React from "react";

const Todo = props => {
    //console.log(props, "props");
  return (
    <p
      className="todoItem"
      style={
        props.todoItem.completed ? { textDecoration: "line-through" } : null
      }
      onClick={e => {
        e.preventDefault();
        props.toggleCompleted(props.todoItem.id);
      }}
    >
      {props.todoItem.item}
    </p>
  );
};

export default Todo;