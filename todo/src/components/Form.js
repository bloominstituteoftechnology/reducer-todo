import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Form = (props) => {
  console.log("Props passed down to Form component from Global State: ", props);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const captureTodo = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    //logic to send the value to the global state
    //me thinks it's an action
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
export default connect(mapStateToProps, { addTodo })(Form);
