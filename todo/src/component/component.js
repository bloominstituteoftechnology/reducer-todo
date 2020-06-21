import React, { useState, useReducer } from "react";
import { initialState, Reducer } from "../reducers/reducer";

const Component = () => {
    const [newItem, setNewItem] = useState("");

    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewItem
        (e.target.value);
    }

    return (
        <div>
            <h3>Reddit To Do List</h3>

            <input 
            className="item-name"
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
            />
            <button onClick={() =>
            dispatch({ type: "UPDATE_ITEM", payload: newItem })}>Add New Item</button>

            <div>
                <ul>
                {state.map(itemMap => {
                    return (<li onClick={() =>
                        dispatch({ type: "UPDATE_COMPLETE" })}>{itemMap.item}</li>)
                })}
                    <li>{newItem}</li>
                </ul>
            </div>
             
        </div>
    )
}

export default Component