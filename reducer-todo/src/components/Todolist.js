import React from "react";
import Todo from "./Todo";

const TodosList = props => {
  console.log("props", props);
  const { todos, editTodo, onToggleComplete } = props;
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          editTodo={editTodo}
          isCompleted={todo.isCompleted}
          todo={todo}
          onToggleComplete={onToggleComplete}
          title={todo.title}
        />
      ))}
    </ul>
  );
};

export default TodosList;
