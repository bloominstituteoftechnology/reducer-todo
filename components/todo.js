import React, { useState, useReducer } from "react";

import {
  Reducer,
  initialState
} from "../reducers/reducers";

const Todo = () => {
    const [newTask, setNewTask] = useState("");
    const [state, dispatch] = useReducer(Reducer, initialState);
  
    const handleChanges = e => {
      setNewTask(e.target.value);
    };
    return (
          <div>
            {state.map((task, index) =>
              <h2 onCLick={() => {
                 dispatch({ type: "TOGGLE_COMPLETED", payload: index})
              }}
              key={index}
                >
                  {task.item}
              </h2>
              )}
            <input
              className="task-input"
              type="text"
              name="newTask"
              placeholder="Enter task here..."
              value={newTask}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                dispatch({ type: "ADD_TODO", payload: newTask });
              }}
            >
              Add Task
            </button>
            <button
            onClick={() => {
                dispatch({ type: "CLEAR_COMPLETED", payload: !state.completed })
            }}>
                Clear Completed
            </button>
          </div>
        )}
  
  export default Todo;
