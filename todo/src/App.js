import logo from './logo.svg';
import './App.css';
import { useReducer } from "react"
import{
    initialTodoState,
    todoReducer,
    ADD_TASK,
    TOGGLE_TASK,
    CLEAR_TASK

} from "./Reducers/todoReducers"
import Todo from "./Components/Todo"
import TodoList from "./Components/TodoList"
import TodoForm from "./Components/TodoForm"

const App = ()=> {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const addTask = (e, data) => {
     e.preventDefault();
     dispatch({ type: ADD_TASK, payload: data });
   };
 
   const toggleTask = taskId => {
     dispatch({ type: TOGGLE_TASK, payload: taskId });
   };
 
  const clearTask = e => {
     e.preventDefault();
     dispatch({ type: CLEAR_TASK });
   };
 const editTask = e =>{
       e.preventDefault();
       dispatch({type: TOGGLE_EDITING})
   }
  return (
    <div className="App">
      <header>
     <TodoForm addTask={addTask}/>
     </header>
     <div className="tasks">
       <TodoList
        data = {state.data}
        toggleTask = {toggleTask}
        clearTask = {clearTask}
        />
     </div>
    </div>
  );
}

export default App;
