import React, { useState, useReducer } from "react";
import { initialState, reducer } from '../reducers/title';

const Todo = () => {
    const [newTodo, setNewTodo] = useState();
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const handleEdit = e => {
        e.preventDefault();
        // setEditing(!editing);
        dispatch({ type: "TOGGLE_EDITING" })
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo("");
        dispatch({ type: "UPDATE_TODO", payload: newTodo || state.todo })
        dispatch({ type: "TOGGLE_EDITING" })
    };

    return (
        <div>
            {state.editing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="newTodo"
                        placeholder={state.todo}
                        value={newTodo}
                        onChange={handleChanges}
                    />
                    <button type="submit">Save</button>
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

export default Todo;
