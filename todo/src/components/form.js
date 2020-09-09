import React, {useState} from "react";

const Form = ({ dispatch }) => {
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
          placeholder="new todo"
          onChange={handleChange}
        />
        <button onClick={() => dispatch({type: 'ADD_TODO', payload: newItem})}>Add</button>
        <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
      </form>
    </>
  );
};

export default Form;