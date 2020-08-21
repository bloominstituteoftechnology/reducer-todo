import React, { useState } from 'react';

const TodoForm = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChanges = (e) => {
    setNewItem( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD_ITEM", payload: newItem });
    setNewItem("");
  };

  return (
    <form>
      <input
        type="text"
        name="item"
        value={newItem}
        onChange={handleChanges}
        placeholder="Add Item"
      />
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;