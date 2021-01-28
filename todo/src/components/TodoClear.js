import React from 'react';
import { CLEAR_COMPLETE } from '../reducers/todoReducer';

const TodoClear = (props) => {
    
    const handleClear = e => {
        e.preventDefault();
        props.dispatch({ type: CLEAR_COMPLETE })
    }
    return (
        <>
            <button onClick={handleClear}>Clear Completed</button>
        </>
    );
};

export default TodoClear;
