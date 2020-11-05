import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer'

const Form = () => {

    const [ newTodo, setNewTodo ] = useState('')
    const [ state, dispatch] = useReducer(reducer, initialState)

    const changeHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD', payload: newTodo})
        setNewTodo('')
    }

    const toggle = (id) => {
        dispatch({
            type: 'TOGGLE', payload: id
        })
    }

    const clear = (e) => {
        e.preventDefault()
        dispatch({
            type: 'CLEAR'
        })
    }

    return (
        <div>
            <input 
                className = 'input'
                type = 'text'
                name = 'new'
                value = {newTodo}
                onChange = {changeHandler}
            />
            <button onClick={onSubmit}> Add new Item to List </button>
            <button onClick = {clear}> Clear Completed Item(s) </button>
            {
                state.todoList.map((item)=>{

                    return <div className='list-item' style = {item.finished ? {textDecoration : 'line-through'}: null}
                    onClick={() => toggle(item.id)} >
                    
                    {item.itemName}

                </div>
                })
            }

        </div>

    )
}

export default Form