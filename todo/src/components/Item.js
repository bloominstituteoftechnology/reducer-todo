import React from 'react';

const Item = (props) => {
  return (
  <div
    className={`item${props.item.completed ? " completed" : ""}`}
    onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id })}
   >
    {props.item.item}
  </div>
  );
};

export default Item;