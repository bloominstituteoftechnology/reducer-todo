import React, { useState } from 'react';

const AddTodo = props => {
    const [newTodo, setNewTodo] = useState();

    const handleChange = e => {
        setNewTodo(e.target.value);
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.dispatch({
                type: "ADD_TODO", payload: {
                    item: newTodo,
                    completed: false,
                    id: new Date()
                }
            })
        }}>

            <input name="todo-field" type="text" value={newTodo} onChange={handleChange} />
            <button>Add</button>
        </form>
    )
}

export default AddTodo;