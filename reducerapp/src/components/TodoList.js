import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer.js';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // console.log('state', state);
  // console.log('dispatch', dispatch);

  const addTodo = task => 
    dispatch({ type: 'ADD_TODO', payload: task });

  const toggleCompleted = id => 
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });

  const clearCompleted = () => 
    dispatch({ type: 'CLEAR_COMPLETED'});

  const handleChange = event =>
    dispatch({ type: 'HANDLE_CHANGE', payload: event.target.value })

  return (
    <div className='todo-list'>
      <TodoForm 
        task={state.task}
        addTodo={addTodo}
        handleChange={handleChange}
        clearCompleted={clearCompleted}
      />
      {state.todos.map(todo => {
        return <Todo {...todo} key={todo.id} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default TodoList;