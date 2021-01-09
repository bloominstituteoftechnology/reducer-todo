import './App.css';
import React, {useState, useReducer} from 'react';
import formReducer, {initialState} from '../src/reducers/formReducer';
import TodoList from './components/TodoList';

function App() {


  const [newTodo, setNewTodo] = useState("");
  const [todo, dispatch] = useReducer(formReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: newTodo});
    setNewTodo("");
  }
  

  return (
    <div className="App">
      <div>
        <h2>To Do List</h2>
      </div>
      <div>
        <input value={newTodo} onChange={handleChanges} type='text' name='todo'/>
        <br></br>
        <button onClick={handleSubmit}>Add To Do</button>
      </div>
      <button onClick={() => dispatch({type: 'CLEAR_TODO'})}>Clear Completed</button>
      <TodoList todo={todo} dispatch={dispatch}/>
    </div>
  );
}

export default App;
