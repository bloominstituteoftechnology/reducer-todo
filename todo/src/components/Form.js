import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Form = (props) => {
  console.log(
    "The state.task object directly from the store to the Form: ",
    props.tasks
  );
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
  console.log("Task object being sent to state: ", task);

  const captureTodo = (e) => {
    e.preventDefault();
    props.holdTodo(task);
    //logic to send the value to the global state
    setTask({
      item: "",
      id: Date.now(),
      completed: false,
    });
  };

  return (
    <div>
      <h3>This is the Form component</h3>
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
