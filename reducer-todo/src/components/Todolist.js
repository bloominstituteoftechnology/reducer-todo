import React from "react";
import Todo from "./Todo";

const Todolist = (props) => {
    console.log("props from App", props);

    return (
        <div>
           { props.todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
        </div>
    )

}

export default Todolist;