import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <form>
                <label htmlFor='todo'>Enter Todo</label>
                <input 
                id='todo'
                type='text'
                name='todo'
                />
            </form>
        </div>
    )
}

export default TodoForm;