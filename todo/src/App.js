import React,{ useState, useReducer} from 'react';
import Todos from './component/todo';

import {initialState,reducer } from './reducers/Reducer'; 


function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [name, setName] = useState('')

  // Adding Handlers
  const changeHandler = e => {
    setName(e.target.value);
  };

  return (
    <div className="App">
    <h1>TO DO LIST</h1>
    <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({
            type: 'ADD_TODO',
            payload: name,
          });
          setName('');
          // console.log(state.todo);
        }}
      >
        <input type='text' name='todo' value={name} onChange={changeHandler} />
        <button>Add</button>
      </form>
      <button
        onClick={() => {
          dispatch({ type: 'DELETE_COMPLETED' });
        }}
      >
        Delete Completed
      </button>
      {state.todo.map(todo => (
        <div className={`todo-item${todo.completed ? ' completed' : ''}`}>
          <p
            onClick={() => {
              dispatch({ type: 'TOGGLE_TODO', payload: todo.id});
              console.log('clicked');
            }}
          >
            {todo.item}
          </p>
        </div>
      ))}
    </div>
  );
}


export default App;