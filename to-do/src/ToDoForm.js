import React, { useState } from "react";

export const ToDoForm = ({dispatch}) => {
    const [item, setItem] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleChanges = e => {
        setItem(e.target.value);
    };
    const handleDateChanges = e => {
        setDueDate(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: [item, dueDate]
        });
        setItem("");
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="todo" hidden>
                    Todo
                </label>
                <input  name="todo" 
                        onChange={handleChanges}
                        value={item}
                        id = {Date.now()}
                />
                <input name = "dueDate"
                    onChange ={handleDateChanges}
                    value = {dueDate}
                    type = "number"
                />
                <button>Add Item</button>
                <button onClick={clearCompleted}>Clear Item</button>
            </form>
        </div>
    );
}