//render list of to dos


import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer'

const Form = () => {
//set up state with reducer hook
    const [ newTodo, setNewTodo ] = useState('')
    const [ state, dispatch] = useReducer(reducer, initialState)

    const changeHandler = (e) => {
        setNewTodo(e.target.value)
    }
//dispatch action to add new todo
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD', payload: newTodo})
        setNewTodo('')
    }
//dispatch an action to toggle
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
//build form to add to dos
    return (
        <div>
            <input 
                className = 'input'
                type = 'text'
                name = 'new'
                value = {newTodo}
                onChange = {changeHandler}
            />
            <button onClick={onSubmit}> Add </button>
            <button onClick = {clear}> Completed </button>
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

export default Form;