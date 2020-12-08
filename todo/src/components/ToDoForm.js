import React, {useReducer} from 'react'
import {addToDo, setInput, clearCompleted} from '../actions/ToDoActions';

const ToDoForm = (props) => {
    const {state, dispatch} = props

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(state))
    }

    const onChange = (e) => {
        dispatch(setInput(e.target.value))
    }

    const clearCompleted = () => {
        dispatch(clearCompleted(state))
    }
    return (
        <div>
            <form onSubmit={onSubmit}> 
                <label>
                    Task:
                    <input 
                    value={state.input}
                    placeholder='Enter a task here'
                    onChange={onChange}
                    />
                </label>
                <button>Add Task</button>
            </form>
            <button >Clear Completed</button>
        </div>
    )
}

export default ToDoForm
