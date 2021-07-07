import React from 'react';

const TodoForm = (props) => {
    //checking to see what is being passed as props
    // console.log('from TodoForm.js ', props)

    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <input 
                    type='text'
                    value={props.input}
                    name='todoForm'
                    onChange={props.handleChanges}
                />
                <button onClick={() => props.dispatch({ type: 'ADD_TODO', payload: props.input })} >Add Task</button>
                <button onClick={() => props.dispatch({ type: 'REMOVE_COMPLETED' })} >Delete</button>
            </form>
        </div>
    )
}

export default TodoForm;

