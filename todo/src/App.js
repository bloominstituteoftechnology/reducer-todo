import React, {useReducer} from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';


import {
  todoReducer,
  initialState,
  ADD_TODO,
  TOGGLE_TASK,
  CLEAR_TASK
} from './Reducers/todoReducer';
const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);

   
    const addTask = (e, list) => {
      e.preventDefault();
      dispatch({ type: ADD_TODO, payload: list });
    };

 
    const toggleTask = taskId => {
      dispatch({ type: TOGGLE_TASK, payload: taskId });
    };

   
    const clearTask = e => {
      e.preventDefault();
      dispatch({ type: CLEAR_TASK });
    };

  return (
    <div>
      <header>
      <h2>Todo List</h2>
      </header>
      <main>
      <TodoList
        list = {state.list}
        toggleTask = {toggleTask}
        clearTask = {clearTask}
        />
      </main>
      <div>
      <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
