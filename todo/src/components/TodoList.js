import React from "react";
import Todo from "./Todo";
import "../App.css";

const TodoList = ({ state, handleCompleted }) => {
  console.log("todoList", state);

  return (
    <div>
      <div className="todos-container">
        {state.todos.length > 0
          ? state.todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  todo={todo}
                  handleCompleted={handleCompleted}
                />
              );
            })
          : "No more todos!"}
      </div>
    </div>
  );
};
export default TodoList;
