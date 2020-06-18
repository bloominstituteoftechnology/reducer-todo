import "../css/index.css";
import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";
import TodoList from "../components/TodoList";

const TodoForm = () => {
  
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const saveTheTodo = () =>{
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  }

  return (
    <div className="todo-form-container">      
        <div className="todo-form">
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              saveTheTodo();
            }}
          >
            Add Todo
          </button>
        </div>

        <div>
            <TodoList toDo={state} dispatch={dispatch}/>
        </div>
     
    </div>
  );
};

export default TodoForm;
