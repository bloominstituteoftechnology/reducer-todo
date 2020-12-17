import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import inputReducer from "./reducers/inputReducer";
import todoReducer from "./reducers/todoReducer";

let todoList = [];

function App() {
  const [active, dispatch] = useReducer(inputReducer);
  const todos = { completed: false, todo: "Example Todo" };
  const [newTodo, addTodo] = useReducer(todoReducer, todos);

  const renderTodos = todoList;


  useEffect(() => {
    todoList.push(newTodo);
    console.log(todoList);
    dispatch({ type: "TOGGLE_INPUT_FIELD" });
    return todoList;
  }, [newTodo]);

  return (
    <div className="App">
      <Header active={active} dispatch={dispatch} />
      {active ? <Input addTodo={addTodo} /> : ""}
      <TodoList renderTodos={renderTodos} />
    </div>
  );
}

export default App;
