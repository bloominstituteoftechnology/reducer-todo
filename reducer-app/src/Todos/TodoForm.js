import React, { useState } from "react";


const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
    setItem("")
  };

  const ClearSubmit = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form className='form'>
        <label htmlFor="todo">New Todo</label>
        <input
          id="todo"
          type="text"
          name="todo"
          value={item}
          onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add ToDo</button>
        <button onClick={ClearSubmit}>Clear ToDo</button>
      </form>
    </div>
  );
};

export default TodoForm;
