import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

const addTask = (e, task) => {
  e.preventDefault();
  dispatch({ type: 'ADD_TASK', payload: task });
};

const toggleTask = task => {
  dispatch({ type: 'TOGGLE_TASK', payload: task });
};

const clearCompleted = e => {
  e.preventDefault();
  dispatch({ type: 'CLEAR_COMPLETED' })
}

  return (
    <div className="App">
      <h1>Welcome to the Jungle 🌴 </h1>
      <ToDoForm addTask={addTask} />
      <ToDoList state={state} toggleTask={toggleTask} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
