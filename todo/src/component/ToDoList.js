import React from "react";

export const ToDoList = ({ state, dispatch }) => {
  console.log(state);
  return (
    <div>
      {state.map((item) => {
        return (
          <div className= 'todo-list'
            onClick={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: item.id })
            }
          >
            <p className={`task ${item.completed ? "completed" : ""}`}>
              {item.item}
            </p>
          </div>
        );
      })}
      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed!
      </button>
    </div>
  );
};

export default ToDoList;
