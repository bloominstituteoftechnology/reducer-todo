import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState, reducer } from './reducer/reducer';
import Todolist from './components/Todolist';
import TodosForm from './components/TodosForm';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Todolist todos={todos}></Todolist>
      <TodosForm></TodosForm>
    </div>
  );
}

export default App;
