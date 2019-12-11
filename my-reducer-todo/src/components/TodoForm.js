import React, { useState } from 'react'

export default function TodoForm(props) {
    const [formInput, setFormInput] = useState('')

    return (
        <form onSubmit={ event => {
            event.preventDefault()
            props.handleAdd(formInput)
            setFormInput('')
        }}>
            <input
                type='text'
                name='listitem'
                value={formInput}
                onChange={ event => {
                    setFormInput(event.target.value)
            }}></input>

            <button type='submit'>Add Todo</button>

        </form>
    )
}