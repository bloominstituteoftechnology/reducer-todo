import React from "react";
import Todo from "./Todo";
import "./App.css";

function TodoList(props) {
  const { list, dispatch } = props;
  const clickHandler = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearList = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODO" });
  };

  return (
    <div className="items">
      {list.map((item) => {
        return <Todo clickHandler={clickHandler} key={item.id} item={item} />;
      })}
      <button onClick={clearList}> Clear List </button>
    </div>
  );
}

export default TodoList;