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
            <button onClick={() => dispatch({ type: "CLEAR_ITEMS"})}>Clear Items</button>

            <div>
                <ul>
                {state.map(item => {
                    return (<li className={item.completed ? "completed" : ""}onClick={(() => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id}))}>{item.item}</li>)
                })}
                </ul>
            </div>
             
        </div>
    )
}

export default Component