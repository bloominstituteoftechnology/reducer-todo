import React from "react";

export const ToDo = props => {
  console.log("props in Todo .js",props.todo.completed)

  return (
    <div>
      <div 
        onClick={() => 
            props.dispatch({ type: "TOGGLE_DELETE", payload: props.todo.id })}
            className={`item${props.todo.completed ? " completed" : ""}`}>

         <p>{props.todo.item}</p>
      </div>
    </div>
  )
}