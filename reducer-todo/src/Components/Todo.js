import React from "react";

const Todo = (props) => {


    return (
        <li className={`item${props.element.completed ? " Done" : ""}`} onClick={() => props.dispatch({ type: 'TOGGLE_DONE', payload: props.element.id })}>
            {props.element.item}
        </li>
    )
}

export default Todo;
