import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [task, setTask] = useState("");
  return (
    <div className="AddTodo">
      <input value={task} onChange={e => setTask(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(task); setTask("")}}>Add</button>
    </div>
  );
}

export default AddTodo;