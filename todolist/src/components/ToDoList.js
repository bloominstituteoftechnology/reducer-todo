import React, { useReducer } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, dispatch }) => {
  // I think i need disdpatch for the clear items?
  const deleteCompleted = () => {
    dispatch({ type: "FILTER_DONE" });
  };

  return (
    <div className="todos-container">
      {toDoList.map(toDoItem => {
        return (
          <ToDoItem toDoItem={toDoItem} dispatch={dispatch} key={toDoItem.id} />
        );
      })}
      <button btn="red-btn-clear" onClick={deleteCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
