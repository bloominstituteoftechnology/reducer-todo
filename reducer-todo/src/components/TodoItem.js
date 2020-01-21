import React from "react";


const TodoItem = (props) => {
  console.log ('Props in TodoItem: ', props);

  return (
    <div>
    <p>{props.item.item}</p>
    <p style={{
      textDecoration:`${props.item.completed} ? 'underline' : 'none'}`,
      }}>
      {props.item.completed}
      </p>
    </div>

  );
}

export default TodoItem;