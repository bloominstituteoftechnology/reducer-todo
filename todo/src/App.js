import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer';
import TodoForm from './components/ToDoForm';
import ToDo from './components/ToDo';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo("");
    console.log(handleChanges);
  };

  const toggleCompleted = (id) => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: id});
  };

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({type: 'CLEAR_COMPLETED'});
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tom's To Do list</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          handleChanges={handleChanges}
          clear={clearCompleted}
          />
        <ToDo state={state} toggleCompleted={toggleCompleted} /> 
      </header>
    </div>
  );
}

export default App;
