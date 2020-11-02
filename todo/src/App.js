import './App.css';
import React, { useReducer, useState } from "react";
import reducer from './reducers/reducer'

const App = () => {
  const initialState = {

  }
  const [state, dispatch] = useReducer(reducer, initialState);
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