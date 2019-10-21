import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    const  [item, setItem] = useState('')

    const handleChange = e => {
       setItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: item
        })
        setItem('')
    }
    
    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        })
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    Todo
                </label>
                <input 
                type = 'text'
                name = 'todo'
                onChange = {handleChange}
                value = {item} />
                <button>Add Todo</button>
                <button onClick = {clearCompleted}>Clear Completed</button>
            </form>
        </div>
        
    )

}

export default TodoForm;