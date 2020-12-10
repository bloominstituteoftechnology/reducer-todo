import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
function App(props) {
  return (
    <div className="App">
      <h2>Welcome to the Todo App</h2>
      <Todo />

      {props.todo.map((item,idx)=>{
        return <TodoList  key={idx}item={item}/>
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps)(App)
