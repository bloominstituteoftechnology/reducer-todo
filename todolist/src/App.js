import React, { useReducer } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { newReducer, initialState } from "../src/reducers/newReducer";
import "./App.css";

function App() {
  const [{ toDoList }, dispatch] = useReducer(newReducer, initialState);

  return (
    <div className="App">
      <ToDoForm dispatch={dispatch} />
      <ToDoList toDoList={toDoList} dispatch={dispatch} />
    </div>
  );
}

export default App;
