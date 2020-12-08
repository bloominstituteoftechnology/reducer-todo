import React from "react";

export default function Todo(props) {
  const { state } = props;
  return (
    <div>
      {state.todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.item}</p>
        </div>
      ))}
    </div>
  );
}
