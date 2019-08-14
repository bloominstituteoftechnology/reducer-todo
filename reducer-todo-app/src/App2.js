// import React, { useReducer } from 'react';
// import './App.css';
// import {initialState, todoReducer} from './reducers/todoReducer.js';
// import TodoList2 from './components/TodoList2.js';
// import TodoForm2 from './components/TodoForm2.js';

// function App2() {
//   const [state, dispatch] = useReducer(todoReducer, initialState);
//   const toggle = id => dispatch({ type: "TOGGLE_TODO", payload: id });
//   const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });
//   const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });
//   return (
//     <div>
//       <h2>Todos</h2>
//       <div>
//         <TodoForm2 addTodo={addTodo} clearCompleted={clearCompleted} />
//         <TodoList2 todos={state.todos} toggle={toggle} />
//       </div>
//     </div>
//   );
// }

// export default App2;

