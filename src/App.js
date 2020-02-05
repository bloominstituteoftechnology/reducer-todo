import React, { useReducer } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import "./components/Todo.css";
import { initialState, errandReducer } from "./reducer/index";

const App = () => {
  const [state, dispatch] = useReducer(errandReducer, initialState);

  const addNewTask = newTaskName => {
    dispatch({ type: "ADD_NEW_TASK", payload: newTaskName });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className='appDiv'>
      <div className='paper'>
        <div className='pattern'>
          <div className='notes'>
            <h1>Reducer To-Do</h1>
            <ToDoList errands={state.tasks} toggleCompleted={toggleCompleted} />
          </div>
        </div>
      </div>
      <ToDoForm addNewTask={addNewTask} clearCompleted={clearCompleted} />
    </div>
  );
};

export default App;
