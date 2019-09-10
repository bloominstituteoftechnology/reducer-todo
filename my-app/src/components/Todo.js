import React from "react";

const Todo = props => {
    return(
        <div className="todoItem">

        <div
        className={`item${props.item.purchased ? 'purchased' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
    >
     <p>{props.item.name}</p>
     </div>

     </div>
        );
};

export default Todo;