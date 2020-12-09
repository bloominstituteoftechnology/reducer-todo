import React, {useState} from 'react'
import {setAddTask}from '../actions/action'

const TodoForm = (props) => {

    const [textInput, setTextInput] = useState('')
    const {dispatch, state} = props

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    const handleTask = (e) => {
        e.preventDefault()
        dispatch(setAddTask({item: textInput, completed: false, id: Date.now()}))
    }

    return (
        <div>
        <form>
            <input 
            value={textInput} 
            onChange={handleChange} 
            type="text" 
            name="item" 
            />
            <button onClick = {handleTask}>Add</button>
        </form>

        </div>
    )
}

export default TodoForm
