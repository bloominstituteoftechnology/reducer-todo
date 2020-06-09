import React from "react";

function addToDoForm(props) {
  return (
    <div className="App">
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="newTodo" onChange={props.handleChanges} />
        <button type="submit">Add To Do</button>
        <button onClick={props.clear}>Clear Completed</button>
      </form>
    </div>
  );
}

export default addToDoForm;
