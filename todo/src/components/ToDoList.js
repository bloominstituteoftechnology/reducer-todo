import React from "react";
import Todo from "./ToDo";

const ToDoList = (props) => {
    return ( <div className="ListContainer">
        <h3>ToDo List</h3>
        <ul>
        {
            props.todos.map(todo => {
                return(<Todo todo={todo}/>)
            })
        }
    </ul>
    <button>Clear Completed</button>
  </div>);
}

export default ToDoList;