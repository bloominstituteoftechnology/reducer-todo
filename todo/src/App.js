import React, { useReducer, useState } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((text, index) =>
          index === action.index ? { ...text, completed: !text.completed } : text
        ),
        todoCount: state.todoCount
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((text, index) => (
        <div
          key={text.text}
          onClick={() => dispatch({ type: "toggle-todo", index })}
          style={{
            textDecoration: text.completed ? "line-through" : ""
          }}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default App;