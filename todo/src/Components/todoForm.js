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
          {...(e) => {
            props.taskSubmit(e);
          }}
        >
          Add Todo
        </button>
        <button
          onClick
          {...(e) => {
            props.clearCompleted(e);
          }}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default todoForm;
