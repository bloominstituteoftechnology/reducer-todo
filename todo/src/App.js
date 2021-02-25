import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import actions, { ADD_TODO, CLEAR_TODO } from './actions';
import { todoReducer } from './reducers'
import Todos from './componenets/Todos'


function App() {

  const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

  const [state, dispatch] = useReducer(initialState, todoReducer)
  const [values, setValues] = useState('')
  
  const handleChanges = (e) => {
    setValues(e.target.value)
    console.log(values)
  }

  const submit = (e) => {
    console.log(`Submited: ${values}`)
    e.preventDefault();
    dispatch(actions.addTodo(values))
  }


  return (
    <div className="App">
      <form onSubmit= {submit}>
        <input type="text" name='todo' onChange= {handleChanges}/>
        <Todos todos= {state} onClick= {!state.completed} />
        <button onClick= {() => dispatch(actions.clearTodo())} > Clear Completed </button>
        <button onClick= {submit}> Add Todo </button>
      </form>
    </div>
  );
}

export default App;
