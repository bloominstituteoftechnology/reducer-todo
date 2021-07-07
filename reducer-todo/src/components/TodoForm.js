import React, { useState } from "react";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = event => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <form>
        <input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="todo"
          placeholder="Add Todo..."
        />
        <div>
        <button onClick={event => {
            event.preventDefault();
            props.addTodo(newTodo);
            setNewTodo("");
          }}>
          Add
        </button>
        </div>
      </form>
      <button onClick={event => {
          event.preventDefault();
          props.clearCompleted();
        }}>
        Clear Completed
      </button>
    </>
  );
};

export default TodoForm;