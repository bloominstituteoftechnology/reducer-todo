import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState, reducer } from './reducer/reducer';
import Todolist from './components/Todolist';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Todolist todos={todos}></Todolist>
    </div>
  );
}

export default App;
