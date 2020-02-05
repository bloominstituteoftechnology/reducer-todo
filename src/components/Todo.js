import React from "react";

const Todo = ({ todo, dispatch }) => {
  
  const toggleCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo
    });
  };

  return (
    <div
     onClick={toggleCompleted}
     className={`todo${todo.completed ? " completed" : ""}`} >      
      <p>{todo.item}</p>
    </div>
  );
};

export default Todo;