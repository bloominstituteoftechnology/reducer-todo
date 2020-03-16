import React, { useState } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';




function App() {
  const list = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  

  const [state,setState] = useState({
    todo: list,
    task: ""
  })

  const toggleCompleted = clickedItemId => {
    setState({
      todo: state.todo.map(task => {
        if (task.id === clickedItemId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  const clearCompleted = e => {
    setState({
      todo: state.todo.filter(task => (task.completed !== true))
    });
    console.log("cleared")
  }

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    setState({
      todo: [...state.todo, newTask]
    });
  };


  return (
    <div className="todoList">
        <h2>Welcome to your Todo App!</h2>
      <TodoList todo={state.todo} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted}/>
      <TodoForm addTask={addTask} />
      </div>
  );
}

export default App;
