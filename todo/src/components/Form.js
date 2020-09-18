import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/index";

const Form = (props) => {
  const [values, setValues] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTodo(values);
        setValues("");
      }}
    >
      <input
        name="todo"
        placeholder="Add Todo"
        value={values}
        onChange={(event) => {
          setValues(event.target.value);
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default Form;
