import React, { useState } from "react";
import { connect } from "react-redux";
import { holdTodo } from "../actions";

const Form = (props) => {
  console.log("Props in Form: ", props);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("todo: ", todo);

  const captureTodo = (e) => {
    e.preventDefault();
    props.holdTodo(todo);
    //logic to send the value to the global state
    setTodo("");
  };

  return (
    <div>
      <h3>This is the Form component</h3>
      <form onSubmit={captureTodo}>
        <input
          type="text"
          placeholder="Enter a Todo Item"
          id="todo"
          value={todo}
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
  };
};
export default connect(mapStateToProps, { holdTodo })(Form);
