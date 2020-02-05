import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState } from './reducers/reducer' // import initialstate data so it can be passed down to a display component
import { Form }from './Form'
function App() {
  return (
    <div className="App">
   <Form />

    </div>
  );
}

export default App;


// <div className="todo-list">
//     {props.tasks.map(task => (
//         <ToDo key={task.id}
//         task={task}
//         toggle={props.toggle}/>
//     ))}
//     <button onClick={props.clearTasks}>
//     Remove Completed</button>

//     </div>
// )
// }

// export default TodoList

// {initialState.map(item => (
//   <Display />
// ))}   