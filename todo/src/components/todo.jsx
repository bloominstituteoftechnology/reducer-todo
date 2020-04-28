import React from "react";

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

return (
      <div className="todo" >
        <li>{todo.item}</li>
        <span onClick={toggleCompleted}></span>
      </div>
  )};
  
  export default Todo;



