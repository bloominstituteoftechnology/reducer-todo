import React, {useReducer} from 'react';

import './App.css';

import {initialState, todoReducer} from './reducers/reducer.js'

import TodoForm from './components/todoform.js'
import TodoList from './components/todolist.js'




function App() {
  
  const [ state, dispatch ] = useReducer(todoReducer, initialState );
  console.log("TCL: App -> dispatch", dispatch)
  console.log("TCL: App -> state", state)

  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item})
  }

  const toggleTodo = id => {
    dispatch({type: "TOGGLE_TODO", payload: id });
  };

  const clearTodo = id => {
    dispatch({type: "CLEAR_COMPLETED"});
  };

return (
    <div className="App">
    <h1>Todos</h1>
    <TodoList todoArr={state.todoArr} toggleTodo={toggleTodo} />
    <TodoForm addTodo={addTodo} clearTodo={clearTodo}/>
    </div>
  );
}

export default App;
