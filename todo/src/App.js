import React, {useState, useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/toDoReducers'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: "ADD_TODO", payload: inputValue});
    setInputValue('');
  }
  return (
    <div>
      <form>
        <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        name='name'
        />
        <button onClick={handleSubmit}>SUBMIT</button>
        <button onClick={() => {
          dispatch({type: "CLEAR_COMPLETED"})
        }}>CLEAR COMPLETED</button>
      </form>
      <div>
        {state.todos.map(todo=>{
          return (
            <div className={todo.completed ? 'completed' : ''}>
              <p onClick={()=>{dispatch({type: "TOGGLE_COMPLETED", payload: todo.id})}}>{todo.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
