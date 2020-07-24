import React, { useState } from 'react';

const TodoForm = (props) => {
    console.log('from TF', props);
    const [task, setTask] = useState('');

    const handleChanges = e => {
        console.log('from TForm HC', e.target.value);
        setTask({ task: e.target.value });
    };
    // const AddTask = (e, taskName) => {
    //     e.preventDefault();
    //     setTask({
    //         ...task,
    //         item: taskName
    //     })


    const handleSubmit = e => {
        e.preventDefault();
        props.additem(task);
    };
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
        </form>
    );
}
export default TodoForm;