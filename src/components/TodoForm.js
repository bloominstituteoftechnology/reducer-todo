import React, { useState } from "react";
// import { Reducer, initialState } from "../reducers/Reducer";

const TodoForm = props => {
  const [name, setName] = useState("");

  const handleChanges = e => {
    setName(e.target.value);
  };

  const submitItem = e => {
    e.preventDefault();
    setName("");
  };

  return (
    <form onSubmit={submitItem}>
      <input  type="text" value={name} name="name" onChange={handleChanges} />
      <button
        onClick={() => props.dispatch({ type: "ADD_ITEM", payload: name })}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;