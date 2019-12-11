import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: newTodo });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="New todo" onChange={handleChanges} value={newTodo} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
