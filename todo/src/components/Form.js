import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Form = (props) => {
  const [task, setTask] = useState({
    item: "",
    id: Date.now(),
    completed: false,
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      item: e.target.value,
    });
  };

  const captureTodo = (e) => {
    e.preventDefault();
    props.addTodo(task);
    setTask({
      item: "",
      id: Date.now(),
      completed: false,
    });
  };

  return (
    <div>
      <h3>Add a To Do Item</h3>
      <form onSubmit={captureTodo}>
        <input
          type="text"
          placeholder="Enter a Todo Item"
          id="todo"
          value={task.item}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { addTodo })(Form);
