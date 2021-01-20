import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
function App(props) {
  return (
    <div className="App">
      <h1>List of Todos</h1>
      <AddTodo />
      {props.todos.map((item,idx)=>{
       return  <Todo item={item} key={item.id}/>
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return({
    todos: state.todos,
  })
}
export default connect(mapStateToProps)(App);
