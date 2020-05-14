import React, { useReducer } from "react";
import "./App.css";

import { initialState, todoReducer } from "./reducers/reducer";
import ToDoList from "./components/ToDoList";
import AddForm from "./components/AddForm";



 	function App() {
  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

   // Setup Functions that run dispatch which will be used to trigger actions and pass in parameters with payload
  const toggleCompleted = id =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR" });
  const handleChange = event =>
    dispatch({ type: "UPDATE", payload: event.target.value });
         return(
             <div>
                 <h2>Add Tasks Below to See Functionality</h2>
             <div>
             <AddForm
             addTodo={addTodo}
             clear = {clear}
             handleChange={handleChange}
             task={state.task}
             />
             <ToDoList
             todosList={state.todos}
             toggleCompleted={toggleCompleted}
             />
             </div>
             </div>
         );
 }
 export default App;
