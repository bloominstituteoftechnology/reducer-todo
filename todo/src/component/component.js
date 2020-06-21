import React, { useState, useReducer } from "react";
import { initialState, Reducer } from "../reducers";

const Component = () => {
    const [newItem, setNewItem] = useState("");

    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleChanges = e => {
        setNewItem
        (e.target.value);
    }

    return (
        <div>
            <h3>{state.item}{""} {!state.completed}</h3>

            <input 
            className="item-name"
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
            />
        </div>
    )
}