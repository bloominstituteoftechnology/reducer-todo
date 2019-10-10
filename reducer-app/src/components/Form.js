import React, {useState} from 'react';

function Form({
    dispatch
}) {
    
    const [todoName, setTodoName] = useState('');
    
    const handleChange = e => {
        setTodoName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const todo = {
            item: todoName,
            completed: false,
            id: Date.now()
            
        }
        dispatch({
            type: 'ADD_ITEM',
            payload: todo
        })
        setTodoName('')

    }

    const clearItems = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_ITEMS'
        })

    }


    return (

        <form onSubmit= {handleSubmit}>
            <input type='text' value={todoName} onChange={handleChange} name="todoName" />

            <button type='submit'>Submit</button> 
            <button onClick={clearItems}>Clear Completed</button>

        </form>

)
}

export default Form
