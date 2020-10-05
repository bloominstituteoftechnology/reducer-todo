import React, { useReducer } from 'react';
import { todos, reducer } from './reducers/Reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



function App() {
  const [todoList, dispatch] = useReducer(reducer, todos);
  

  return (
    <div className='container'>
      <h1 className="title">ToDo List</h1>
      <TodoForm   dispatch={dispatch}/>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  )
}

export default App;
