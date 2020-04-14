import React, { useState } from "react";

const TodoForm = props => {
  const [state, setState] = useState("");

  const handleChanges = e => {
    setState(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: state });
    setState("");
  };

  const removeTodo = e => {
    e.preventDefault();
    props.dispatch({ type: "REMOVE_TODO", payload: state });
  };

  return (
    <form>
      <input
        type="text"
        name="todo"
        value={state}
        onChange={handleChanges}
        placeholder="...todo"
      />

      <button onClick={addTodo}>Add Task</button>
      <br></br>
      <button onClick={removeTodo}>Remove Completed</button>
    </form>
  );
};

export default TodoForm;
