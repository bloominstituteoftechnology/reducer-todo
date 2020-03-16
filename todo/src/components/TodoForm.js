import React, { useState } from 'react';

const TodoForm = ({ addNewTask }) => {
    //console.log('to do form props', props)

    const [newTaskName, setNewTaskName] = useState('');

    const handleChanges = e => {
        setNewTaskName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        addNewTask(newTaskName);
        setNewTaskName('');
    }

    console.log(newTaskName);

    return (
        <div>
            <p>this is the form</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newTask"
                    placeholder="Add a new task"
                    value={newTaskName}
                    onChange={handleChanges}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;