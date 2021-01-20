
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import  {reducer, initialState} from './reducers'
import {useReducer} from 'react'
import {addTodo} from "./actions"


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const handleClick = (title) => {
      dispatch(addTodo(title))
  }
  return (
     
    <div className="App">
       <h1>Todo App</h1>
       <button onClick={handleClick}>Test Button</button>
       <TodoList todos={state.todos}></TodoList>
       <TodoForm handleClick={handleClick}></TodoForm>
       
      
    </div>
  );
}

export default App;
