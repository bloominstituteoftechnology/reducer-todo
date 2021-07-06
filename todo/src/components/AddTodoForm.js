import React, { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodoForm = ({ addTodo }) => {
    const [item, setItem] = useState("")
    const [date, setDate] = useState(Date.now())

    //HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    //HANDLE FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(item, date);
        setItem("");
    }

    //HANDLE DATE CHANGE
    const handleDateChange = newDate => {
        setDate(newDate)
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <h3>Add new todo</h3>
                <input name="title" type="text" value={item} onChange={e => handleChange(e)} placeholder="Todo Title"/>
                <h5>Complete By:</h5>
                <DatePicker selected={date} onChange={handleDateChange} minDate={Date.now()}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm