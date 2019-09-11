import React, { useState, useReducer } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";

import "./components/ToDo.css";
import { listReducer, initialState } from "./components/reducers/listReducers";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false

  }
];

function App() {
  const [task, setTask] = useState([]);
  const [state, dispatch] = useReducer(listReducer, initialState);
  const toggleItem = id => dispatch({ type: "TOGGLE_ITEM", payload: id });


  const clearCompleted = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  console.log(state);
  return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm dispatch={dispatch} />
        <TodoList
            todo={state.todoData}
            toggleItem={toggleItem}
            clearCompleted={clearCompleted}
        />
      </div>
  );
}

export default App;
