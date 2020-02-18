import React, {useReducer} from 'react';
import  {todoReducer, initialState} from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


import './App.css';



function App() {
  const [state,dispatch] = useReducer(todoReducer,initialState);
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TodoList todosArray={state.todosArray} dispatch={dispatch}/>
      <TodoForm dispatch={dispatch}/>

    </div>
  );
}

export default App;
