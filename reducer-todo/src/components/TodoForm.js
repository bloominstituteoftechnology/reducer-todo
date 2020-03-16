import React, { useState } from "react";

const TodoForm = (props) => {

  const [state,setState] = useState( {
    task: ""
  });

  const handleChanges = e => {
    setState({
        task: e.target.value
    });
};

  // class property to submit form
  const submitForm = e => {
    e.preventDefault();
    props.addTask(state.task);
    console.log(state.task);
    setState({
        task: ""
    });
  };
    return (
      <div>
      <form className="todoForm"onSubmit={submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          className="inputStyle"
          type="text"
          name="task"
          value={state.task}
          onChange={handleChanges}
          placeholder="...todo"
        />
        <button className="todoButton">Add to List</button>
      </form>
      </div>
    )
  }


export default TodoForm;
