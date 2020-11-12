import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { holdTodo } from "../actions";

const Form = (props) => {
  console.log("directly from the store: ", props);
  console.log(
    "The state.task object directly from the store to the Form: ",
    props.tasks
  );
  const [task, setTask] = useState([
    {
      item: "",
      id: Date.now(),
      completed: false,
    },
  ]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      item: e.target.value,
      id: Date.now(),
      completed: false,
    });
  };
  console.log("Task object been sent to state: ", task);

  const captureTodo = (e) => {
    e.preventDefault();
    dispatch(props.holdTodo(task));
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
    item: state.item,
    completed: state.completed,
    id: state.id,
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { holdTodo })(Form);
