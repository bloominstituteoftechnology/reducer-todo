import React, { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((t, idx) =>
        idx === action.idx ? { ...t, completed: !t.completed } : t
      ),
      
      };
      case "DELETE_TODO":
        return {
          todos: state.todos.filter((t) => !t.completed)
        };

    default:
      return state;
  }
}

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Submit</button>
        <br />
        <button
        onClick={(e) => {
          e.preventDefault()
          dispatch({type: "DELETE_TODO"})
        }}
        
        >Clear Completed</button>
      </form>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "TOGGLE_TODO", idx })}
          style={{
            textDecoration: t.completed ? "line-through" : ""
          }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export default App;