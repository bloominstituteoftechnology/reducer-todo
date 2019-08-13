import React from 'react'
const Todo = ({ id, task, completed, toggleCompleted }) => {
    return (
      <ol>
        <li
          // Conditionally apply completed class if completed is true
          className={"task" + (completed ? " completed" : "")}
          onClick={() => toggleCompleted(id)}
        >
          {task}
        </li>
      </ol>
    );
  };
  
   export default Todo;

