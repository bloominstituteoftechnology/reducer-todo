import React from "react";

const TodoForm = (props) => {
  
  return (
    <div className="form-box">
      <h1>To Do List</h1>
        <div className="form-container">
        <form onSubmit={props.handleSubmit}>
                <input 
                    onChange={props.handleChanges}
                    type="text"
                    name="todo"
                    value={props.newTask}
                    />
                    <button type="submit">Add</button>
                    <button onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
    </div>
  );
};
export default TodoForm;