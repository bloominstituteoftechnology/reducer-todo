import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";

const Todo = () => {
  //   const [todo, setTodo] = useState("ToDo List!");
  //   const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.todo}
          {""}
          <i
            onClick={() => dispatch({ type: "UPDATE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => dispatch({ type: "UPDATE_TODO", payload: newTodo })}
          >
            Update To Do!
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
