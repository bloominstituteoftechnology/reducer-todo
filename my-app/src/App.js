import React, { useReducer, useState } from "react";
import { initialState, TodoReducer } from "./Reducers/Reducer";
import TodoForm from "./Components/todoForm";
import TodoList from "./Components/todoList";
import Todo from "./Components/Todo"

const App = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const [newTodoItem, setNewTodoItem] = useState("");

  // const addTodo = input =>  {
  //   const newTodo = {
  //     todo: input,
  //     completed: false,  // this one does not work the 
  //                       //working one is on todoForm.js
  //     id: new Date()
  //   };
  //   dispatch({ type: "TODO_ADD", payload: newTodo });
 // }

  // function handleComplete(id) {
  //   dispatch({ type: "COMPLETED_TODO", payload: id });
  // }

  function clearCompleted() {
    dispatch({ type: "CLEAR_DONE" }); // non working reducer thing, I will come back to this.
  }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
  
      <TodoForm 
      // passing props to TodoForm to allow for the use of Dispatch to call the reducer
      dispatch={dispatch}  /> 
       <TodoList state={state}/> 
      {/* <Todo handleComplete={handleComplete} /> */}

      <button className="delete-button" onClick={e => {clearCompleted()}}>
        Clear Completed
      </button>
    </div>
  );
};

export default App;
