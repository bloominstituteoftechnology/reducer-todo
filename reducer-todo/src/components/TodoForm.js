import React from 'react';

const TodoForm = ({ todoInput, handleTodoInput, handleSubmit, dispatch }) => {
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