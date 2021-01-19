import './App.css';
import React , {useReducer} from 'react'
import todoReducer, {initialState} from './reducers/todoReducer';
import  {addTodo, completedTodo, clearTodo} from './actions/actions'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

const [state,dispatch]= useReducer(todoReducer, initialState)

const setTodo = (todo) => {
  dispatch(addTodo(todo))
}

const completeTodo = (todoID) => {
  dispatch(completedTodo(todoID))
}

const doneTodo = () => {
  dispatch(clearTodo())
}

return (
    <div className="App">
      <header className ='Page-header' >
      <h1> Todo Application</h1>
      <TodoForm setTodo={setTodo} doneTodo={doneTodo} />
      <TodoList completeTodo={completeTodo} ListTodo={state.todos}/>
      </header>
    </div>
  );
}

export default App;
