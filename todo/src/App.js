import React, {useReducer} from 'react';
import './App.css';
import ToDoForm from './component/TodoForm'
import ToDoList from './component/ToDoList'
import { reducer,initialState } from "./reducer/reducer";

function App() {
  
  const [{todo}, dispatch] = useReducer(reducer, initialState);
  console.log(todo);

  return (
    <div className="App">
      <h1 >My Reduced Todo </h1>
      <ToDoForm dispatch={dispatch}/>
      <ToDoList dispatch={dispatch} state={todo}/>
    </div>
  );
}

export default App;
