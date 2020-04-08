import React from 'react';
import AddTodo from './AddToDo/AddTodo';
import './scss/Header.scss';

function Header() {
  return (
    <div className="header">
      <h1>Sort your todos</h1>
      <AddTodo/>
      
    </div>
  );
}

export default Header;