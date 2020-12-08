import React, {useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import ToDoReducer, {initialState} from './reducers/ToDoReducer';
import ToDoForm from './components/ToDoForm'
import ToDo from './components/ToDo'

function App() {
  const [state, dispatch] = useReducer(ToDoReducer, initialState)
    console.log(state.todo)
  return (
      <div>
        {
          state.todo.map((task, key)=>{
            return <ToDo task={task} key={key} dispatch={dispatch}/>
          })
        }
        <ToDoForm state={state.input} dispatch={dispatch}/>
      </div>
  );
}

export default App;
