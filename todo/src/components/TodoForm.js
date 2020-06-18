import "../css/index.css";
import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";
import TodoList from "../components/TodoList";

const TodoForm = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);

  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-form-container">      
        <div className="todo-form">
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            //value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              //dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
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
