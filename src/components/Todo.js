import React from "react";
import {TOGGLE_TODO} from '../reducers/reducer';


function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todo.id
    });
  };

  return (
    <>
      <div
        onClick={toggleCompleted}
        className={`task${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        <p>{todo.item}</p>
      </div>
    </>
  );
}

export default Todo;