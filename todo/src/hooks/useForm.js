import React, { useState } from 'react'


export const useForm = (initialValues) => {
    const [todoItem, setTodoItem] = useState(initialValues)


    const handleChange = e => {
        setTodoItem(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        setTodoItem('')

    }
    return [todoItem, handleChange, submitHandler]
}