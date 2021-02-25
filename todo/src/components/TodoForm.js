import React, { useState } from 'react';

const TodoForm = (props) =>{
    const [form, setForm] = useState('');

    const handleChanges = e=> {
        setForm(e.target.value);
    };

    const SubmitItem = e =>{
        e.preventDefault();
        props.addTask(form)
        setForm('');
    }





    return(
    <form onSubmit={SubmitItem}>
        <label htmlFor='newTask'>
            <input 
                type='text' 
                name='newTask' 
                placeholder='Add a New Task' 
                value={form}
                onChange ={handleChanges}
            />
        </label>
        <button type='submit'>Add Task</button>
    </form>
)
}

export default TodoForm