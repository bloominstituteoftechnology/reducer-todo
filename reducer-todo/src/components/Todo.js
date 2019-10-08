import React from "react";

const Todo = (props) => {
  const { isCompleted, todo, onToggleComplete, title } = props;
  return (<div className="date-todo">
          <ul
            className="todo"
            style={{
              textDecoration: isCompleted ? "line-through" : undefined,
              cursor: "pointer",
              userSelect: "none"
            }}
            onClick={() => onToggleComplete(todo)}
          >
            {title} is due by {todo.id}
          </ul>
          </div> );
}

export default Todo;