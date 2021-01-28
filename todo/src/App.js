import React, { useReducer } from "react";
import "./App.css";
import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED,
} from "./reducers/reducer.js";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = (itemId) => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
        <div>
          <TodoForm addItem={addItem} />
        </div>
        <div>
          <TodoList
            todoList={state.todoList}
            toggleItem={toggleItem}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
