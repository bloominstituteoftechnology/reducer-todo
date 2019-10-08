// ### STEP 3 - Adding todos

import React, { useState } from "react";

export const TodoForm = ({dispatch}) => {
    const [item, setItem] = useState("");

    const handleChanges = event => {
        setItem(event.target.value);
    };

    // - Build a function that will dispatch an action to add a new todo
    const submitForm = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");
    };
    // - Build a function that will dispatch an action to filter out any completed todos
    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <div>
            {/* - Build a form to add todos to your list */}
            <form onSubmit={submitForm}>
                <label htmlFor="todo" hidden>
                    Todo
                </label>
                <input  name="todo" 
                        onChange={handleChanges}
                        value={item} 
                />
                <button>Add Item</button>
                {/* - Invoke this new function when you click on a "Clear completed" button */}
                <button onClick={clearCompleted}>Clear Item</button>
            </form>
        </div>
    );
}

