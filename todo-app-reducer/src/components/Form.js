import React, { useReducer, useState } from "react";

import { initialState, ListReducer } from "../reducers/Reducers";

const Form = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(ListReducer, initialState);
  // console.log(state);

  const handleChanges = e => {
    setNewTodo({
      item: e.target.value,
      completed: false,
      id: Date.now()
    });
  };

  return (
    <div className="wrapper">
      <form>
        <div className="addTodoWrapper">
          <input
            type="text"
            name="addTodo"
            placeholder="Add a new item!"
            onChange={handleChanges}
          />
          <button
            type="submit"
            onClick={() =>
              dispatch({
                type: "ADD_TODO",
                payload: newTodo
              })
            }
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
