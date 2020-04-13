import React from "react";

let Todo = props => {
  console.log("todo props", props)
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.status ? "Completed" : "Incomplete"}</p>
    </div>
  )
}

export default Todo;
