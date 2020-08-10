import React from 'react';
import './App.css';
import useForm from './hooks/useForm'

function App() {
  const [useInput, todoList, onChange, onSubmit] = useForm()

  function displayTodos() {
    //prefer this way to you can debugge it
    //take all of the array obj descripton text and put in on a li tag to be 
    let item
    item = todoList.map(todoData => {
      return <li>{todoData.description}</li>
    })
    return item
    
  }
  return (
    <div className="App">
      <section class="challange-todo-list">
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
        </div>
      </section>
    </div>
  );
}

export default App;
