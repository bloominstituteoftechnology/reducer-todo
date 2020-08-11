  import React from "react";

function TodoForm(props) {
  const { dispatch, task, setTask } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: task });
    setTask("");
  };

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={task} onChange={changeHandler} />
      <button> ADD TASK </button>
    </form>
  );
}
export default TodoForm;