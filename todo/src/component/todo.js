import React, { useState, useReducer } from "react";
import Item from "./Item";
import { initialState, reducer } from "../reducers/todoreducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const [todoState, setTodoState] = useState();

  const onChange = (e) => {
    e.persist();
    setTodoState(e.target.value);
  };

  const toggle = (id) => {
    console.log(id);
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <div>
      <form>
        <label htmlFor="todo">Todo</label>
        <input
          name="todo"
          id="todo"
          type="text"
          onChange={onChange}
          value={todoState}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "ADD_TODO", payload: todoState });
          }}
        >
          Add Todo
        </button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "CLEAR_TODOS" });
        }}
      >
        Clear All
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "CLEAR_COMPLETED" });
        }}
      >
        Clear Completed
      </button>
      <div>
        {state.map((item) => (
          <Item key={item.id} item={item} toggleKey={toggle} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
