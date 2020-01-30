import React, { useState } from 'react'

const AddTodoForm = ({ addTodo }) => {
    const [item, setItem] = useState("")

    //HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    //HANDLE FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(item);
        setItem("");
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input name="title" type="text" value={item} onChange={e => handleChange(e)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm