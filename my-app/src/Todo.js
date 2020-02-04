import React from "react";

const Todo = (props) => {
    return (
        <div
        onClick={event => props.toggleCompleted(props.todos.id)}
        className={`todos${props.todos.completed ? "completed" : ""}`}
    >
        <p>{props.todos.item}</p>    

    </div>
    );
};

export default Todo;