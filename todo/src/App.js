import React, {useReducer} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import "./components/Todo.css";
import {
  formReducer,
  initialState,
  ADD_TASK,
  TOGGLE_TASK,
  CLEAR_TASK
} from './reducers/reducer.js';


const App = () => {

  const [state, dispatch] = useReducer(formReducer, initialState);

    //add task
    const addTask = (e, data) => {
      e.preventDefault();
      dispatch({ type: ADD_TASK, payload: data });
    };

    //toggletask
    const toggleTask = taskId => {
      dispatch({ type: TOGGLE_TASK, payload: taskId });
    };

    //clear task
    const clearTask = e => {
      e.preventDefault();
      dispatch({ type: CLEAR_TASK });
    };

  return (
    <div>
      <header className="App-header">
      <h2>Todo List</h2>
      </header>
      <main className="App-main">
      <TodoList
        data = {state.data}
        toggleTask = {toggleTask}
        clearTask = {clearTask}
        />
      </main>
      <div className="App-addbar">
      <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App; 