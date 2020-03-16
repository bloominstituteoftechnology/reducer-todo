import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todos';
import {todoReducer} from './reducers/TodoReducer';

function App() {



  let [newTodo, setNewTodo] = useState('');

  const [state, dispatch] = useReducer(todoReducer, []);
  let [finalState, setFinalState] = useState(state);

useEffect(() => {
  setFinalState(state)
},[state]);

  let getNextID = () => {
    if (state.length === 0) {return 0}
    return state[state.length-1].id+1;
  }

  let addTodo = (e) => {
    e.preventDefault();
    e.target.elements[0].value='';
    let todo = {
      task: newTodo,
      completed: false,
      id: getNextID()
    }
    state.push(todo)
    setNewTodo('');
  }

  // function updateTodo(todo) {
  //   state.forEach(i => {
  //     console.log('todo ', todo);
  //     if (i.id === todo.id) {
  //       i.completed = todo.compelted;
  //     }
  //   })
  // }

  let handleChange = (e) => {
    setNewTodo(e.target.value);
  }


  return (
    <div>
      <form onSubmit={addTodo}>
        <input type='text' onChange={handleChange}></input>
        <button type='submit' disabled={newTodo === ''}>Add TODO</button>
      </form>
      <button onClick={() => dispatch({type: 'clear'})}>Clear All</button>
      {finalState.map(todo => (
        <Todo  todo={todo} dispatch={dispatch}></Todo>
      )) 
      }
    </div>
  );
}

export default App;
