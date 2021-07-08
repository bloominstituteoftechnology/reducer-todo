// https://github.com/royeradames/reducer-todo

import React from 'react';
import './App.css';
import useForm from './hooks/useForm'

function App() {
  const [useInput, todoList, onChange, onSubmit, toggleCompleted, clearTodos] = useForm()

  function displayTodos() {
    //prefer this way to you can debugge it
    //take all of the array obj descripton text and put in on a li tag to be 
    const item = todoList.map(aTodo => {
      return (
        <li id={aTodo.id} onClick={toggleCompleted} key={aTodo.id}>
          <span className={aTodo.completed ? 'completed' : ''} id={aTodo.id}>   
            {aTodo.item}
          </span>
          <span id={aTodo.id}>
            {aTodo.timeTag}
          </span>
        </li>
      )
    })
    return item
  }

  return (
    <div className="App">
      <section className="challange-todo-list">
        <div className="display-todos">
          <h2>Todo List:</h2>
          <ul>
            {displayTodos()}
          </ul>

        </div>
        <div className="todo-form">
          <form onSubmit={onSubmit}>
            <input placeholder='Add new Todo' value={useInput} onChange={onChange} />
            <button type='submit'>Submit Todo</button>
          </form>
          <button onClick={clearTodos}>Clearn Completed Todos</button>
        </div>
      </section>
    </div>
  );
}

export default App;
