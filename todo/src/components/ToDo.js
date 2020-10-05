import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { item: action.item, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((
          i,
          index //interate over todos and flip completed
        ) => (index === action.index ? { ...i, completed: !i.completed } : i)),
      };
    case "remove-completed":
      return {
        todos: state.todos.filter((i) => i.completed === false),
      };
    default:
      return state;
  }
}

const ToDo = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [item, setItem] = useState();

  return (
    <div>
      <div>To Do:</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", item });
          setItem("");
        }}
      >
        <label>
          {" "}
          Add Item
          <input
            type="text"
            name="item"
            value={item}
            placeholder='i.e. "Wash Car"'
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <button onClick={() => dispatch({ type: "add-todo" })}>
          {" "}
          Add Item
        </button>
        <button onClick={() => dispatch({ type: "remove-completed" })}>
          {" "}
          Clear Completed
        </button>
      </form>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      {todos.map((i, index) => (
        <div
          key={i.item}
          onClick={() => dispatch({ type: "toggle-todo", index })}
          style={{ textDecoration: i.completed ? "line-through" : "" }}
        >
          {i.item}
        </div>
      ))}
    </div>
  );
};

export default ToDo;
