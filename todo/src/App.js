import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoReducer, initialState } from './components/reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const AddTask = newText => dispatch({ type: 'ADD_TASK', payload: newText })
  const toggleCompleted = (taskId) => dispatch({ type: 'TOGGLE_COMPLETED', payload: taskId });
  const clearCompleted = (task) => dispatch({ type: 'CLEAR_COMPLETED', payload: task })
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      {console.log('from App', state)}
      {state.tasks.map(tasks => {
        return <TodoList
          key={tasks.id}
          tasks={tasks}
          toggle={toggleCompleted} />
      })}

      <TodoForm
        additem={AddTask}
        toggle={toggleCompleted}
        clear={clearCompleted} />
    </div>
  );
}

export default App;
