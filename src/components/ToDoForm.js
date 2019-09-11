import React, { useState, useReducer } from "react";

const TodoForm = ({ dispatch }) => {
    const [name, setName] = useState("");
    //const [state, dispatch] = useReducer(listReducer, initialState);
    const handleChanges = e => {
        setName(e.target.value);
    };

    const submitItem = e => {
        e.preventDefault();
        // Old version via props.addTask(name);
        dispatch({ type: "ADD_ITEM", payload: name });
        setName("");
    };

    return (
        <form onSubmit={submitItem}>
            <input type="text" value={name} name="name" onChange={handleChanges} />
            <button>Add</button>
        </form>
    );
};

export default TodoForm;
