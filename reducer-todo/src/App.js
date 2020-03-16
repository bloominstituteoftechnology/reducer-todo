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
  

  const [todo,setTodo] = useState(list);
  const [task,setTask] = useState("");

  const toggleCompleted = clickedItemId => {
    setTodo({
      todo: this.state.todo.map(task => {
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
    setTodo({
      todo: this.state.todo.filter(task => (task.completed !== true))
    });
    console.log("cleared")
  }

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    setTodo({
      todo: [...this.state.todo, newTask]
    });
  };


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
