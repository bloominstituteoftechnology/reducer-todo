import React from "react";

const TodoForm = () => {
  return (
    <div>
      <p>Todo Form</p>
      <form>
        <input
          type="text"
          name="newTask"
          placeholder="Add new task"
          />
          <button type="Submit">Add</button>
          </form>
    </div>
  )
}

export default TodoForm;
