import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "./Reducers/Reducer";
import TodoForm from "./Components/todoForm";
import TodoList from "./Components/todoList";
import Todo from "./Components/Todo"

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodoItem, setNewTodoItem] = useState("");

  const addTodo = input =>  {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now()
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  }

  function handleComplete(id) {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  }

  function clearCompleted() {
    dispatch({ type: "CLEAR_DONE" });
  }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <todoReducer />
      <TodoForm addTodo={addTodo} />
      {/* <TodoList /> */}
      <Todo handleComplete={handleComplete} />

      <button className="delete-button" onClick={e => {clearCompleted()}}>
        Clear Completed
      </button>
    </div>
  );
};

export default App;
