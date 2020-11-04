import React, { useState, useReducer } from 'react'
import '../App.css'
import { useForm } from '../hooks/useForm'

//import reducer
import { initialState, todoReducer } from '../reducers'


function TodoForm() {

    //const [todoItem, setTodoItem] = useState('')
    const [todoItem, handleChange, submitHandler] = useForm('')

    const [state, dispatch] = useReducer(todoReducer, initialState)

    console.log(state)
        //     const handleChange = e => {
        //         setTodoItem(e.target.value);
        //     }

    //     //prevents default on submit and clears the state
    //  const submitHandler = e => {
    //      e.preventDefault();
    //      setTodoItem('')

    //  }

    return ( <
        div >
        <
        form onSubmit = { submitHandler } >
        <
        input className = "todoItem-input"
        type = "text"
        name = "todoItem"
        placeholder = 'enter in list item'
        value = { todoItem }
        onChange = { handleChange }
        />

        <
        button
        //adds to state after you press submit
        onClick = {
            () => {
                dispatch({ type: 'ADD_TODO', payload: todoItem });
            }
        } >
        Submit item <
        /button>

        { /* loops through state and posts the items to the page */ } {
            state.todoList.map((item, index) => {
                return <p
                className = { `${item.completed ? "checkedOff": ''}` }
                onClick = {
                    () => dispatch({ type: "COMPLETED", payload: index }) } > { item.todoList } < /p>;
            })
        }

        <
        button onClick = {
            () => dispatch({ type: "CLEAR_COMPLETED" }) } >
        Clear List < /button> <
        /form> <
        /div>
    )
}

export default TodoForm;