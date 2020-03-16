import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <label htmlFor="todo">
          <h1>Aja's Todos </h1>
          <br/>
        </label>
        <div className="topOfForm">
          <div className="addTodo">
            <input
              name="todo"
              onChange={handleChanges}
              value={item}
              placeholder="Add New Todo..."
            />
            <button className="btn">Add</button>
          </div>
          <button className="clearbtn" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
