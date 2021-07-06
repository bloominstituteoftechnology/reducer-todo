// ### STEP 4 - Toggle the completed field

import React from "react";

// - Build a function that will dispatch an action to toggle a todo's completed field
export function Todo({ todo, dispatch }){
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };
    console.log(todo);
    return(
        // - Invoke this new function when you click on a todo
        <div onClick={toggleCompleted}
        className={`todo${todo.completed ? "completed" : ""}`}
        // - Style your todo to somehow show that it is completed (be creative here!)
        style={{ textDecoration: todo.completed ? "line-through" : ""}}>
        
        <p>{todo.item}</p>
        </div>
    );
}

