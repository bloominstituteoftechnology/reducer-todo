import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/reducer.js";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function newTodo(newTodoData) {
    console.log("NEW TODO", state);
    dispatch({type: "ADD_TODO", todo: newTodoData});
    console.log("NEW TODO after ", state);
  }

  function clearCompleted() {
    dispatch({type: "CLEAR_COMPLETE"});
  }
  function setCompleted(task) {
    dispatch({type: "TOGGLE_COMPLETE", todoID: task});
    
  }

  return (
    <div className="App">
      <h1>Anthony's Todo List</h1>
      <TodoForm newTodo={newTodo} clearCompleted={clearCompleted}/>
      <TodoList todoData={state} setCompleted={setCompleted}/>
    </div>
  );
}

export default App;
