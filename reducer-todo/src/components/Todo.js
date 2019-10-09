import React from "react";
import edit_icon from "../imgs/edit_icon.png";
import delete_sign from "../imgs/delete_sign.png";

const Todo = props => {
  const { isCompleted, editTodo, todo, onToggleComplete, title } = props;
  return (
    <div className="date-todo">
      <ul
        className="todo"
        style={{
          textDecoration: isCompleted ? "line-through" : undefined,
          cursor: "pointer",
          userSelect: "none"
        }}
        onClick={() => onToggleComplete(todo)}
      >
        {title} is due by {todo.id}{" "}
      </ul>
      <div>
        <button onClick={editTodo(todo)} className="icon-button">
          <img className="edit-icon" alt={"img of edit icon"} src={edit_icon} />
        </button>
        <button className="icon-button">
          <img
            className="edit-icon"
            alt="img of delete icon"
            src={delete_sign}
          />
        </button>
      </div>
    </div>
  );
};

export default Todo;
