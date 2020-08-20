import React, {useState} from "react";

const ToggleTodo = ({toggle}) => {
  const [task, setTask] = useState("");
  return (
    <div className="ToggleTodo">
        <p value={task} onChange={e => setTask(e.target.value)} 
        className={`task${toggle.completed ? 'completed' : ''}`} 
        onClick={() => {toggle(task); setTask(toggle.completed)}}
        />
    </div>
  );
}

export default ToggleTodo;