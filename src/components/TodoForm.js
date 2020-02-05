import React from "react";

const TodoForm = ({dispatch, newTodo, setNewTodo}) => {  

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo })
    setNewTodo("");
  }

  return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="newTodo"
          value={newTodo}
          placeholder="Add Todo"
          onChange={handleChange}
          />
        <button type="submit">Add List</button>
      </form>
  )
}

  export default TodoForm;