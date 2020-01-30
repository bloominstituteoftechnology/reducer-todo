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
                {console.log(date)}
                <input name="title" type="text" value={item} onChange={e => handleChange(e)} />
                <DatePicker selected={date} onChange={handleDateChange}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm