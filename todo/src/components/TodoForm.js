import React, { useState } from 'react';

const TodoForm = (props) => {
    const [formState, setFormState] = useState({
        todo: ''
    })
    const initialState = {
        todo: ''
    }
    const handleChanges = (e) => {
        const newInput = {
            ...formState, 
            [e.target.name]: e.target.value
        }
        setFormState(newInput)
    }
    const handleSubmit = (e) => {
        setFormState(initialState);
        props.addTask(e, formState.todo)
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = 'text'
            placeholder = 'ToDo'
            name = 'todo'
            value = {formState.todo}
            onChange = {handleChanges} />
            <button>AddTask</button>
        </form>
    )
}

export default TodoForm 