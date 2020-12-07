import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/index";
import { setTodo, setNewTodoText } from "../actions/index";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    dispatch(setNewTodoText(e.target.value));
  };
  return (
    <div>
      <p>{state.item} form p tag</p>
      <form>
        <label htmlFor="todo" />
        To do:
        <br />
        <input
          type="text"
          id="todo"
          onChange={handleChanges}
          value={state.setTodo}
        />
        <br />
        <button
          onClick={() => {
            dispatch(setNewTodoText(state.setTodo));
          }}
          type="submit"
        >
          Click to Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
