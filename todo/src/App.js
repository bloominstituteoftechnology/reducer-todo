
import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducers/TodoReducer';
import './App.css';
import moment from "moment";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [taskInput, setTaskInput] = useState('');
  
  const handleChange = e => {
    setTaskInput(e.target.value)
  }

  return (
    <div className="App">
      <div className = "title">
        <h1>My Todo List</h1>
      </div>
      <header className="App-header ">
        {state.map(task => 
          <div className="displayTask" key={task.id} 
               onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id})}>
            {
              
              task.completed ? 
               
              
              <span>
              <span style={{ textDecoration: 'line-through' }} >
              {task.item}</span> 
            <div className="completed">Completed <i className="fas fa-check">
               </i> {moment(Date.now()).format('lll')}</div>
              </span>
              : 
              <span>{task.item}</span>
              
            }
            
          </div>
        )}
        <div className="inputButtons">
        <input 
          type="text"
          name="addtask"
          maxLength= "30"
          placeholder="Task to be added"
          value={taskInput}
          onChange={handleChange}
          
        />
        <button onClick={() => {dispatch({ type: 'ADD_TASK', payload: taskInput});
         setTaskInput("");
      }}>Add Todo Task</button>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED'})
      }>Clear Completed</button>
        </div>
      </header>
      
      
        
        
    </div>
  );
}

export default App;