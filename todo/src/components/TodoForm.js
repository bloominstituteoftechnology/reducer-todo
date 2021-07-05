import React, { useState } from 'react';

const TodoForm = (props) => {
    console.log('from TF', props);
    const [task, setTask] = useState('');

    const handleChanges = e => {
        console.log('from TForm HC', e.target.value);
        setTask(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();
        props.additem(task);
    };

    const clearCompleted = e => {
        e.preventDefault();
        props.clear(task);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='item'
                placeholder='Add Task'
                onChange={handleChanges}>
            </input>
            <button>
                Add Task
            </button>
            <button onClick={(e) => clearCompleted(e)}>
                Clear Completed
            </button>
        </form>
    );
}
export default TodoForm;