import React, { useState } from 'react';

function ToDoForm({dispatch}){
    const [itemInput, setItemInput] = useState('');

    const handleInput = e => {
        setItemInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'TODO_ADD', payload: itemInput})
        setItemInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
                    value={itemInput} 
                    onChange={handleInput}/>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

default export ToDoForm;