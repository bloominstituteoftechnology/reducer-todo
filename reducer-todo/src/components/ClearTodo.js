import React, { useState, useReducer } from 'react';
import { reducer } from '../reducers/Reducers';

function ClearTodo() {
    const [clearTodo, setNewClearTodo] = useState();
    const [state, dispatch] = useReducer(reducer)

    const handleChanges = e => {
        setNewClearTodo(e.target.value);
    };

    const handleEdit = e => {
        e.preventDefault();
        dispatch({ type: "TOGGLE_CLEAR" })
    }; 

    const handleSubmit = e => {
        e.preventDefault() 
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
                ) : (
                        <div>
                            <h1>{state.todo}</h1>
                            <button onClick={handleEdit}>Edit</button>
                        </div>
                    )}
            </div>
        );
    };
}

    export default ClearTodo;