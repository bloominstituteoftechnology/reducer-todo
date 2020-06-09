import React from 'react'

export const ToDo = ({handleChanges, values, submit}) => {
    
    return (
        <div>
            <form onSubmit={submit}>
            <input onChange={handleChanges} name='todo' value={values}/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}