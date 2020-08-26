import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import {reducer} from "./reducers/reducer";
import {initialState} from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm dispatch={dispatch} />
      </div>
      <TodoList dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
