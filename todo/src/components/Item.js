import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markComplete } from "../actions";

const Item = (props) => {
  console.log("Props from inside the Item component: ", props.tasks.id);

  const [completedTask, setCompletedTask] = useState({
    item: props.tasks.item,
    id: props.tasks.id,
    completed: true,
  });
  console.log("completed task: (this is local state) ", completedTask);

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
      <p onClick={addCompleted}>Mark as Completed</p>
    </div>
  );
};

export default Item;
