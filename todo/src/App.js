import React, {useReducer, useState} from "react";
import styled from "styled-components";
import Form from "./components/form";
import List from "./components/todoList";
import {reducer, initialState} from "./reducers/todoReducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  function toggleComplete(e) {
    for(let i in state) {
      if (state[i].item === e.target.textContent) {
        dispatch({type: "TOGGLE_COMPLETED", payload: i}); 
      }
    }
  }

  function addTodo(title) {
    dispatch({type: "ADD_TODO", payload: title});
    setValue("");
  }

  function clearCompleted() {
    dispatch({type: "CLEAR_COMPLETED"});
  }

  return (
    <div className="App">
      <Form 
        value={value}
        setValue={setValue}
        add={addTodo}
        clear={clearCompleted}
      />
      <List 
        toggle={toggleComplete}
        state={state}
      />
    </div>
  );
}

export default App;
