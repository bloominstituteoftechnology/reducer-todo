import React from 'react';
import { useInput } from './useInput';

const TodoForm = ({ dispatch }) => {
    const [todoInput, setTodoInput, handleTodoInput] = useInput('');

    const handleSubmit = (e) => {
    const todo = e.target.todoInput.value;
    dispatch({type: 'add', payload: {todo: todo}});
    setTodoInput('');
    e.preventDefault();
  };
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' name='todoInput' placeholder='Enter todo'
            value={todoInput} onChange={e => handleTodoInput(e.target.value)}/>
            <button type='submit'>Add Todo</button>
            <button onClick={e => {
                dispatch({type: 'clear'});
                e.preventDefault();
            }}>Clear</button>
        </form>
    );
};

export default TodoForm;