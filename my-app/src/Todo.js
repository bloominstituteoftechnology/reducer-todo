import React from "react";

const Todo = (props) => {
    return (
        <div>{props.todos.map(item => (
            <p
                key={item.id}
                className={item.completed ? "completed" : ""}
                onClick={() => props.toggleCompleted(item.id)}>
                    {item.item}
                </p>
        ))}

        </div>
    );
};

export default Todo;