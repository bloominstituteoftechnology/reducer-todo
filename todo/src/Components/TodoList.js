import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      <div>
        {props.todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
        ))}
      </div>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
