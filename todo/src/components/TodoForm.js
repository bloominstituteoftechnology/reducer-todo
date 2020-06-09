import React, { useState } from "react";

const TodoForm = (props) => {
  const [item, setItem] = useState("");
  const { addTodo, clearCompleted } = props;
  const handleChange = (event) => setItem(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(item);
    setItem("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className="addBtn"> + Add + </button>
        <input
          className="inputBox"
          type="text"
          name="item"
          value={item}
          onChange={handleChange}
          placeholder="Add Todo"
        />
        <button className="clearBtn" onClick={clearCompleted}>
          {" "}
          - Clear -
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
