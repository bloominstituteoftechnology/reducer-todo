import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import TodoList from '../components/TodoList/TodoList';
import './scss/index.scss';


function App() {
  return (
    <div className="container">
      <Header/>
      <Main />
      <TodoList />
    </div>
  );
}

export default App;
