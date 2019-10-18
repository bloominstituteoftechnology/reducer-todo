import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducers';

export function ClearTodo() {
    const [clearTodo, setNewClearTodo] = useState();
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e => {
        setNewTitle(e.target.value);
    };

    const handleEdit = e => {
        e.preventDefault();
        dispatch({ type: "TOGGLE_CLEAR" })
    }; 

    const ClearTodo = e => {
        event.preventDefault() 
        return (
            <div>
                {state.clearTodo ? (
                    <form onSubmit={handleSubmit}>
                        <input
                        type='text'
                        name='clearTodo'
                        placeholder={state.clearTodo}
                        value={clearTodo}
                        onChange={handleChanges} />
                        <button type='submit'>Clear Todo's</button>
                    </form>
                    )}
            </div>
        )   
    }    
}   