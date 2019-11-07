import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, toggleTodo }) => {
  return (
    <div className="todo-list">
      {tasks.map(item => {
        return <Todo key={item.id} {...item} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
};

export default TodoList;
