import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react'

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
            <Form onSubmit = {handleSubmit}>
                <h1>
                    Todo
                </h1>
                <Form.Input 
                    type = 'text'
                    name = 'todo'
                    onChange = {handleChange}
                    value = {item} />
                <Form.Button>Add Todo</Form.Button>
                <Button primary onClick = {clearCompleted}>Clear Completed</Button>
            </Form>
        </div>
    )

}

export default TodoForm;