import React from "react";

const todoForm = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.taskInput}
          name="taskInput"
          onChange={props.inputChange}
        />
        <button
          onClick
          {...(event) => {
            props.taskSubmit(event);
          }}
        >
          Add Todo
        </button>
        <button
          onClick
          {...(event) => {
            props.clearCompleted(event);
          }}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default todoForm;
