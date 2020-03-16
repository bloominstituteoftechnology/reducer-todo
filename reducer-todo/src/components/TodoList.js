import React from "react";
import tack from "../img/tack.png"
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todoListed">
      <div>
      <img className="tackPic" src={tack}/>
      </div>
      {props.todo.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button onClick={()=>{props.clearCompleted()}}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
