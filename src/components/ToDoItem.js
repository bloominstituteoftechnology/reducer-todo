import React from "react";
export default function ToDoItem(props) {
  function handleToggle(e) {
    props.dispatch({ name: "TOGGLE_COMPLETED", payload: props.id });
    e.stopPropagation();
  }
  return (
    <li
      className={"to-do-item" + (props.completed ? " completed" : "")}
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={props.completed}
        onChange={handleToggle}
      />
      {props.item}
    </li>
  );
}
