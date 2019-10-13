import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";
import TodosForm from "./components/TodosForm";
import TodosList from "./components/Todolist";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTodo = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODOS", payload: state.todo });
  };

  const deleteTodo = id => event => {
    event.preventDefault();
    console.log("delete Todo", id);
    dispatch({type: "DELETE_TODO", payload: id});
  }

  const handleChange =  event => {
    console.log("edited Todo", event.target.value);
    // var inputValue  = event.target.value;
    dispatch({ type: "HANDLE_CHANGE", payload : event.target.value });
  };

  const toggleComplete = todo => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: todo });
  };

  const clearCompleted = () => {
    const newTodos = state.todos.filter(todo => !todo.isCompleted);
    dispatch({ type: "CLEAR_COMPLETED", payload: newTodos });
  };

  // const overDue = () => {
  //   if (todo.due_by === Date.now()) return todo
  // }

  const editTodo =  todo => e => {
    e.preventDefault();
    dispatch({ type: "EDIT_TODO", payload: todo });
  };

  return (
    <div className="todos">
      <h1>Todo List</h1>
      <TodosList
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        todos={state.todos}
        onToggleComplete={toggleComplete}
      />
      <TodosForm
        title={state.todo}
        onChange={handleChange}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
