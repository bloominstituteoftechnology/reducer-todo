import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className='task-list'>
      {props.todoList.map((taskItem) => (
        <Todo
          handleToggleItem={props.handleToggleItem}
          key={taskItem.id}
          taskItem={taskItem}
        />
      ))}
    </div>
  );
};

export default TodoList;