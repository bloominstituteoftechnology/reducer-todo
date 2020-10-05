import React from "react";

const Item = (props) => {
  return (
    <div
      className={`item${props.item.done ? "done" : ""}`}
      onClick={() => props.toggleKey(props.item.id)}
    >
      <p>{props.item.item}</p>
    </div>
  );
};
export default Item;
