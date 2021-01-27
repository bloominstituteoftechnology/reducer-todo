import React, { useReducer, useState } from 'react';
import todoReducer, { initialState } from '../reducers/todoReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newItem, setNewItem] = useState('');

    const handleChange = e => {
        e.preventDefault()
        setNewItem({[e.target.name]: e.target.value})
    }
    return (
        <form>
            <input
                id='newItem'
                name='newItem'
                value={newItem}
                onChange={handleChange}
            />
            <button>Add to list</button>
        </form>
    );
};

export default TodoForm;