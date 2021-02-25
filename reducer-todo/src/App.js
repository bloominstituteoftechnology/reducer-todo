import React, { useReducer } from 'react';
import './components/Todo.css';
import TaskList from './components/TodoList';
import formReducer, {initialState} from './reducers/formReducer';
import {addTask, toggleCompleted, clearCompleted} from './reducers/formActions';
import TodoForm from './components/TodoForm';



function App () {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const newTask = (task) => {
    dispatch(addTask(task))
  }

  const toggleTask = (taskId) => {
    dispatch(toggleCompleted(taskId))
  }

  const clearTask = () => {
    dispatch(clearCompleted())
  }


  
    return (
      <div className='container'>
        <h2>Simple To-Do App</h2>
        <TodoForm newTask={newTask}/>
        <TaskList tasks={state.tasks} toggleTask={toggleTask} clearTask={clearTask}  />
        
      </div>
    );
  }


export default App;