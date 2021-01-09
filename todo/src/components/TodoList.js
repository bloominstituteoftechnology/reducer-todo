import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    return(
        <div>
            {
                props.todo.map((task) => (
                    <Todo key={task.id} task={task} dispatch={props.dispatch} />
                ))
            }
        </div>
    )
}

export default TodoList;
