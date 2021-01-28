import React, { useState } from 'react';
import { ADD_TODO } from '../reducers/todoReducer';

const TodoForm = (props) => {
    const [newItem, setNewItem] = useState('');

    const handleChange = e => {
        setNewItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setNewItem('');
        props.dispatch({ type: ADD_TODO, payload: newItem })
    }
    return (
        <form>
            <input
                id='newItem'
                name='newItem'
                value={newItem}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}>Add to list</button>
        </form>
    );
};

export default TodoForm;