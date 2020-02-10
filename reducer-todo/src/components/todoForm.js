import React, { useState } from 'react';

export const TodoForm = props => {

    const [newTodo, setNewTodo] = useState();

    const handleChanges = event => {
        setNewTodo(event.target.value);
      };

    const handleSubmit = event => {
        event.preventDefault();
        props.addTodo(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
            <button>Add New Item</button>
        </form>
    )
} 