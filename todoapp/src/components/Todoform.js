import React, { useState } from 'react';



function Todoform (props){
    const[forms, setForms] = useState ('');

    return(
        <form onSubmit ={(e) => {
            e.preventDefault()
            props.handleAdd(forms)
            setForms('')

        }}>

            <input
            type='text'
            name= 'todolist'
            value= {forms}
            onChange = {(e) => {
                setForms(e.target.value)
            }}

            >
            </input>

            <button type = 'submit'> Add To List </button> 
        </form>
        
        
    )
}

export default Todoform;