import React, {useState} from 'react'
import {setAddTask, setClearTask, setNewTodoItem}from '../actions/action'
import styled from 'styled-components'

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

    const clearTask = (e) =>{
        e.preventDefault()
        dispatch(setClearTask())
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(setNewTodoItem(""));

      }

    return (
        <StyledContainer>
        <form onSubmit = {handleSubmit}>
            <Input 
            value={textInput} 
            onChange={handleChange} 
            type="text" 
            name="item" 
            />
            <Button onClick = {handleTask}>Add</Button>
            <Button onClick = {clearTask}>Clear</Button>
        </form>
        </StyledContainer>
    )
}

const Button = styled.button`
    border-radius:8px;
    padding:1%;
    width:20%;
    border:none;
    background: #0085D1;
    color: white;
    margin-left:5%;
`

const StyledContainer = styled.div`
    width:40%;
    height:80%;
`

const Input = styled.input`
    border:none;
    background: #F4F6F7;
    border-radius: 3px;
`

const Form = styled.form`
    border:none;
    background: #F4F6F7;
    border-radius: 3px;
`

export default TodoForm
