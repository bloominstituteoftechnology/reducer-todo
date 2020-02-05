import React from "react";
import Todo from "./Todo";

const TodoList = ({state, dispatch}) => {

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <div className='todo-list'>
       {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
      </div>
        <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;