import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList'; 
import { initialState } from './reducers/reducer'; 
import { todoReducer } from './reducers/reducer'; 

class App extends React.Component {
  constructor(){
    super(); 
    this.state = { initialState };
    console.log(this.state); 
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.initialState.todos}/> 
      </div>
    )
  }
}
  
export default App;
