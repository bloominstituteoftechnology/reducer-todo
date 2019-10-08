import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasksData = [
  {
    task: 'Wash all the walls.',
    id: 2542652,
    completed: true,
  },
  {
    task: 'Shave the cat.',
    id: 2542653,
    completed: false,
  }
]

const App = () => {

  
    return (
      <div className='App'>
        <div className='header'>
          <h2>RENDER IT COMPLETE: </h2>
          <TodoForm/>
        </div>
        <TodoList/>
      </div>
    );
  }


export default App;
