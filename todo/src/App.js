// https://github.com/royeradames/reducer-todo.git

import React, {useReducer} from 'react';
import './App.css';
import useForm, {initialTodo, todoReducer} from './hooks/useForm'
import moment from 'moment';

function App() {
  const [todoListFromApp, setTodoListFromApp] = useReducer(todoReducer, initialTodo)
  
  const [useInput, todoList, onChange, onSubmit, toggleCompleted, clearTodos] = useForm()

  function displayTodos() {
    //prefer this way to you can debugge it
    //take all of the array obj descripton text and put in on a li tag to be 
    const item = todoListFromApp.map(aTodo => {
      return (
        // with span
        <li id={aTodo.id} key={aTodo.id}>
          <span onClick={(e) => setTodoListFromApp({ type: 'COMPLETED', payload: { id: e.target.id } })} className={aTodo.completed ? 'completed' : ''} id={aTodo.id}>   
            {aTodo.item}
          </span>
          <span id={aTodo.id}>
            {aTodo.completed ? ` Completed: ${moment().format('MMMM Do YYYY, h:mm a')}` : ''}
          </span>
        </li>
      )
    })
    return item
    // const item = todoList.map(aTodo => {
    //   return (
    //     // with span
    //     <li id={aTodo.id} key={aTodo.id}>
    //       <span onClick={toggleCompleted} className={aTodo.completed ? 'completed' : ''} id={aTodo.id}>   
    //         {aTodo.item}
    //       </span>
    //       <span id={aTodo.id}>
    //         {aTodo.completed ? ` Completed: ${moment().format('MMMM Do YYYY, h:mm a')}` : ''}
    //       </span>
    //     </li>
    //   )
    // })
    // return item
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
