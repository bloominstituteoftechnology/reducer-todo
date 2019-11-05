import React from "react";


export function Completed({ todo, dispatch }){
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };



    
    return(
        <div onClick={toggleCompleted}
        className={`todo${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through" : ""}}>
        <p>Task: {todo.item}</p>
        <p>Do by: {todo.dueDate}</p>
        </div>
    );
}