import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markComplete } from "../actions";

const Item = (props) => {
  const [completedTask, setCompletedTask] = useState({
    item: props.tasks.item,
    id: props.tasks.id,
    completed: true,
  });

  const dispatch = useDispatch();

  const addCompleted = (e) => {
    setCompletedTask({
      ...completedTask,
      completed: true,
    });
    dispatch(markComplete(completedTask));
  };

  return (
    <div>
      <p>{props.tasks.item}</p>
      <button onClick={addCompleted}>Mark as Completed</button>
    </div>
  );
};

export default Item;
