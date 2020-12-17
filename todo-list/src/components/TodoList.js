import React from "react";
import Todo from "./Todo";

function TodoList({ renderTodos }) {
  return (
    <div className="todoList">
      {renderTodos.map((todo, index) => {
        return <Todo key={index} completed={todo.completed} name={todo.todo} />;
      })}
    </div>
  );
}

export default TodoList;
