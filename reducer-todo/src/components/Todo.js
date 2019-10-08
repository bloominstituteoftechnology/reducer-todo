import React from "react";

const Todo = (props) => {
    console.log("props from Todo", props);

    return (
        <div key={props.todo.id}>
            <h1>{props.todo.item}</h1>
        </div>
    )

}

export default Todo;