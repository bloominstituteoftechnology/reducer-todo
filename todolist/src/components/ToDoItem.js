import React from "react";

const ToDoItem = ({ toDoItem, dispatch }) => {
  const { id, task, completed } = toDoItem;
  //i think i need a dispatch here for the mark completed

  const completeTask = e => {
    //provides the strikethrough decoration
    e.target.classList.toggle("completed");
    dispatch({ type: "COMPLETE_TASK", payload: id });
  };
  return (
    <div onClick={completeTask} className="todo-item">
      {task}
    </div>
  );
};

export default ToDoItem;
