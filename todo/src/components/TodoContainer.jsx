import React, { useReducer, useState } from 'react'
import * as red from '../reducer/reducer'
import TodoCard from './TodoCard'
import Form from './Form'

export default function TodoContainer() {

  const { initialState, reducer } = red.default;
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState('')

  function handleChange(e) {

    setInput(e.target.value)

  }

  function handleClear() {

    dispatch({ type: 'CLEAR' })

  }

  function handleSubmit(e) {

    e.preventDefault();

    dispatch({ type: 'ADD', payload: input })

    setInput('')

  }

  function handleComplete(e) {

    dispatch({ type: 'DONE', payload: e.target.id })

  }


  return (

    <div>

      <Form handleSubmit={handleSubmit} handleChange={handleChange} input={input} handleClear={handleClear} />
      
      <TodoCard tasks={state} handleComplete={handleComplete} />

    </div>

  )

}
