import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/TodoReducer";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import ToggleTodo from "../components/ToggleTodo";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      <AddTodo add={task => dispatch({type: "add", task: task})} />
      {state.todos.map(task => (
        <Todo key={task.id} todo={task} />
      ))}
      <ToggleTodo toggle={task => dispatch({type: "toggle", completed: task.completed})} />
  </div>);
}
export default TodoApp;