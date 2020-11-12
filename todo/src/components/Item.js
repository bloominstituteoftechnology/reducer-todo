import React from "react";

const Item = (props) => {
  console.log("Props from inside the Item component: ", props);
  return (
    <div>
      <h3>Item.js</h3>

      {/* {props.task.map((item) => (
        <div key={item.id}>
          <p>{item.item}</p>
          {item.completed === false ? <p>Completed</p> : <></>}
        </div>
      ))} */}
    </div>
  );
};

export default Item;
