import React, { useReducer, useState } from "react";
import { initialTodos, toDoReducer } from "./reducers/todoReducer";

const TodoForm = (props) => {
  //const [todos, dispatch] = useReducer(toDoReducer, initialTodos);
  const [newTask, setNewTask] = useState("");

  /*const toggleCompleted = e => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };*/
  
  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventdefault();
  };

  return (
    <div>
      <h1>To Do List</h1>
        <div>
        <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChanges}
                    type="text"
                    name="todo"
                    value={props.newTask}
                    />
                    <button>Add</button>
            </form>
        </div>
    </div>
  );
};
export default TodoForm;