import React, { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const captureTodo = (e) => {
    e.preventDefault();
    //logic to send the value to the global state
    //me thinks it's an action
    setTodo("");
  };

  console.log("todo entered: ", todo);
  return (
    <div>
      <h3>This is the Form component</h3>
      <form onSubmit={captureTodo}>
        <input
          type="text"
          placeholder="Enter  a Todo Item"
          id="todo"
          value={todo}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
