import React, { useReducer, useState } from "react";
import { reducer, initialState } from "./../reducers/reducers";
import TodoList from "./TodoList";

const TodoForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const handleClear = (event) => {
    event.preventDefault();
    dispatch({ type: "REMOVE", payload: todo });
  };

  console.log("this is state", state);

  return (
    <div className="form">
      <form>
        <label htmlFor="todo">Add Todo: </label>
        <input
          id="todo"
          name="todo"
          type="text"
          value={todo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleClear}>Delete</button>
      </form>
      <TodoList id={state.id} todo={todo} dispatch={dispatch} state={state} />
    </div>
  );
};

export default TodoForm;
