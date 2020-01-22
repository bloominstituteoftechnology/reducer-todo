import React, { useReducer, useState } from "react";

const TodoForm = props => {
  const [form, setForm] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addTodo(form);
        setForm("");
      }}
    >
      <input
        type="text"
        name="item"
        placeholder="New thing todo"
        value={form}
        onChange={e => {
          setForm(e.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
};

export default TodoForm;
