import React from "react";

export default function TodoForm(props) {
  return (
    <form className="form-div" onSubmit={props.onSubmit}>
      <input
        placeholder="Add a Todo"
        type="text"
        id="todo"
        name="todo"
        onChange={props.onChange}
        value={props.inputValue}
      />
      <button className="button">Submit</button>
    </form>
  );
}
