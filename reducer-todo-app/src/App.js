import React, {useReducer} from 'react';
import './App.css'

import {initialState, todoReducer} from './reducers/todoReducer.js'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const toggle =id => dispatch ({type: 'TOGGLE_TODO', payload: id});
  const addTodo = item => dispatch({type: 'ADD_TODO', payload: item});
  const clearCompleted = () => dispatch ({type:'CLEAR_COMPLETED'});
  return (
    <div>
      <h2>Todo</h2>
        <div>
          <TodoForm  addTodo = {addTodo} clearCompleted = {clearCompleted} />
          <TodoList todos = {state.todos} toggle = {toggle} />
        </div>
    </div>
  )
}

export default App