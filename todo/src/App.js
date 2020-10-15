import React, { useState, useReducer } from 'react';
import {
  todoReducer, 
  initialState,
  ADD_TODO
} from "./reducers/todoReducer"


function App() {
  const [newTodo, setNewTodo] = useState("")

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <h1>React TODO</h1>
      <form onSubmit={() => dispatch({type: ADD_TODO})}>
            <input 
                type="text"
                name="todo"
                placeholder="Enter A Task"
                value={newTodo}
                onChange={handleChanges}
            />
             <button className="submit">Add Todo</button>
        </form> 
        <div className="todoList">
          <h1>{state.item}</h1>
        </div>
      

     
     
      
    </div>
  );
}

export default App;
