import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './components/reducer.js';

import './App.css';


// import React, { useReducer } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function countReducer(state, action){
//   // if(action.type === "INCREMENT") 
//    switch(action.type){
//     case "INCREMENT":
//       return { count: state.count + 1 };
  
//   // if(action.type === "DECREMENT") 
//     case "DECREMENT":
//       return { count: state.count - 1 };
// }
// }
// // {type: "INCREMENT"}
// // {type: "DECREMENT"}




// function App() {
//  const [state, dispatch] = useReducer(countReducer, {count: 0});

//   return (
//     <div className="App">
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({type: "INCREMENT"})}>Add Task</button>
//       <button onClick={() => dispatch({type: "DECREMENT"})}> Subtrack Task</button>
//     </div>
//   );
// }

// export default App;


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App;
