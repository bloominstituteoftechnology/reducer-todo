import React, { useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";

const TodoForm = (props) => {
  const [todo, setTodo] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  const initialState = { title: "Reducer", editing: false };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {!editing ? (
      <h1>Hi</h1>
      )}
      </div>
  )
};

export default TodoForm;
