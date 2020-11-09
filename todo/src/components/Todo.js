import React from "react";

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };
  
  return (
      <div className="todos" >
        <li style={{ color: todo.completed ? "grey" : "black", textDecoration: todo.completed ? "line-through" : "" }}>{todo.item}</li>
        <span className="done" onClick={toggleCompleted}>√</span>
      </div>
  );
}

export default Todo; 