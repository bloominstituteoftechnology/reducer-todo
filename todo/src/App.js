import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducers";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", item: inputValue });
    setInputValue("");
  };

  return (
    <div className="App">
      <TodoForm
        onChange={onChange}
        onSubmit={onSubmit}
        inputValue={inputValue}
      />
      <ul>
        {state.map(todo => (
          <Todo
            todo={todo}
            toggle={() => dispatch({ type: "TOGGLE_COMPLETED", id: todo.id })}
          />
        ))}
      </ul>
      <div className="button-div">
      <button className="button" onClick={() => dispatch({ type: "REMOVE_TODO" })}>
        Remove
      </button>
      </div>
    </div>
  );
}

export default App;
