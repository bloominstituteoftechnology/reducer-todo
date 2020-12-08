import React from "react";
import { addTodo, newTodo } from "../actions";

const TodoForm = props => {
  const { state, dispatch } = props;

  const handleChanges = e => {
    dispatch(newTodo(e.target.value));
  };

  return (
    <div>
      <form>
        <label htmlFor="todo" />
        To do:
        <br />
        <input
          type="text"
          id="todo"
          value={state.addedTodo}
          onChange={handleChanges}
        />
        <br />
        <button type="submit">Click to Add</button>
        <button>Click to Clear</button>
      </form>
    </div>
  );
};

export default TodoForm;
