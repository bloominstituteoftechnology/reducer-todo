import React from 'react';
import AddTodo from './AddToDo/AddTodo';
import './scss/Header.scss';

function Header(props) {
  return (
    <div className="header">
      <h1>Sort your todos</h1>
      <AddTodo state={props.state} dispatch={props.dispatch}/>
      
    </div>
  );
}

export default Header;