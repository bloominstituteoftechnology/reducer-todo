import React from "react";
import moment from "moment";

export default function TodoList(props) {
  console.log("list", props);

  return (
    <div>
      {props.todo.map((item) => (
        <li
          className={`todo${item.done ? " done" : ""}`}
          key={item.id}
          onClick={() => props.toggle(item.id)}
        >
          {item.name} ---- added on {moment(item.id).format("MMMM Do YYYY, ")}{" "}
          at
          {moment(item.id).format(" h:mm:ss a")}
        </li>
      ))}
      {props.todo[0] ? (
        <button className="clear-btn" onClick={props.clear}>
          Clear List
        </button>
      ) : (
        ""
      )}
    </div>
  );
}