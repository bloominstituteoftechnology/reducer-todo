import React, { useReducer, useState } from "react";
import { initialState, toDoReducer } from "./reducers/todoReducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const toggleCompleted = e => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };
  
  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  const handleAddTask = e => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <div>
      <h1>To Do List</h1>
        <div>
          <h1>{state.item}</h1>
          <input
            type="text"
            name="newTask"
            value={newTask}
            onChange={handleChanges}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
    </div>
  );
};
export default TodoForm;