import React from "react";
import { connect, useDispatch } from "react-redux";

const Item = (props) => {
  console.log("Props from inside the Item component: ", props.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{props.tasks.item}</p>
      {props.tasks.completed === false ? (
        <p onClick={dispatch({ type: "MARK_COMPLETE" })}>Completed</p>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Item;
