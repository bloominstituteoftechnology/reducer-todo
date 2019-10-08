import React from "react";

const Todo = (props) => {
  const { isCompleted, todo, onToggleComplete, title } = props;
  return (
          <li
            className="todo"
            style={{
              textDecoration: isCompleted ? "line-through" : undefined,
              cursor: "pointer",
              userSelect: "none"
            }}
            onClick={() => onToggleComplete(todo)}
          >
            {title}
          </li>
        );
}

export default Todo;