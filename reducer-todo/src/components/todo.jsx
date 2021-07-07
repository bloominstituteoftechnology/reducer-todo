import React from "react";

const Todo = props => {
  const toggleTodo = () => {
    props.dispatch({ type: "TOGGLE_TODO", payload: props.todo.id });
  };
  console.log("this is todo info", props.todo.id);

  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={toggleTodo}
    >
      {props.todo.item}
    </div>
  );
};

export default Todo;
