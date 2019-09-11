import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState, reducer } from './reducer/Reducer';
import TodoList from './components/ToddoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item});
  }
  const toggleTodo = id => { dispatch({ type: "TOGGLE_TODO", payload: id })
};
 const deleteCompleted = () => {
   dispatch({ type: "DELETE_COMPLETED" });
 };
  return (
    <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
<TodoList todoList={state.todoList} toggleTodo={toggleTodo} />
<TodoForm addTodo={addTodo} deleteCompleted={deleteCompleted}/>      
    </div>
  );
}

export default App;
