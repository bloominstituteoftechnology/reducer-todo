import React from "react";

const TodoForm = () => {
  const initialFormValue = {
    title: "",
    completed: false,
  };

  const onChange = (e) => {
    console.log(e);
  };

  console.log(initialFormValue);

  return (
    <div>
      <form>
        Todo
        <input
          type="text"
          name="title"
          value=""
          placeholder="Add todo"
          onChange={onChange}
        />
      </form>
      <button>Submit!</button>
    </div>
  );
};

export default TodoForm;
