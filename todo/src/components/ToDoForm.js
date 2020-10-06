import React, { useState } from "react";
import "../App.css"


const ToDoForm = ({ dispatch }) => {

  const [newItem, setNewItem] = useState()

  const submitHandler = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    setNewItem(event.target.value)
  };




  return (

    <>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          value={newItem}
          name="item"
          placeholder="type new todo here"
          onChange={handleChange}
        />


     


        <button onClick={() => dispatch({type: 'ADD_TODO', payload: newItem})}>Add New Task</button>
       



        <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>

      </form>

    </>

  );
};

export default ToDoForm