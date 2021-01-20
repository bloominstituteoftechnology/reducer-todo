import { useReducer } from "react";
import './App.css';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import reducer, { initialState } from "./reducers/ToDoReducer";
import { addTodo } from "./actions/ToDoAction";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (title) =>{
    dispatch(addTodo(title))
  }
  
  return(
    <div className="App">
      <h1>ToDo App</h1>
      {/* <button onClick = {handleClick}>Test</button> */}
      <ToDoList  todos={state.todos}/>
      <ToDoForm handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
