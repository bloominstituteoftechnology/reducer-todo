import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import reducer, { initialState } from "./reducers";

import { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("current state: ", state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>My Todo:</h1>
        <TodoForm />
      </div>
      <TodoList />
    </div>
  );
};

export default App;
