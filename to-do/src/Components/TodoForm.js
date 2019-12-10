import React, { useState, useReducer } from 'react';
import Todo from'./Todo';
import {initialState, reducer} from '../reducers/todoReducers';

const TodoForm = () => {
    const [input, setInput] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: input })
        setInput('')
    }

    return(
    <div>
    <form>
    <label>Todo</label>
    <input 
    
    value={input}
    onChange={handleChange}
    />

    <button onClick={handleSubmit}>New Todo</button>
</form>

<Todo state={state} />
</div>
    )
};

export default TodoForm;