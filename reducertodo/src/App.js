import React, {useReducer} from 'react';
import './App.css';
import TodoList from './componets/todoList';
import TodoForm from './componets/TodoForm';
import { todoReducer, initialState } from './reducer/reducer.js';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = item => dispatch({ type: 'ADD_TODO', text: item });
  const toggleComplete = id => dispatch({ type: 'TOGGLE_COMPLETE', id: id });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  console.log(state.todos);

  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={state.todos} toggleComplete={toggleComplete}/>
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      </header>
    </div>
  );
}

export default App;
