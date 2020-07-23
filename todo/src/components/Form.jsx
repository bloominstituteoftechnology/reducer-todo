  
import React from 'react'
import styled from 'styled-components'

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #555555;
  outline: none;
  font-size: 1rem;
  padding: 7px 12px;
`

const StyledButton = styled.button`
    border: 1px solid #555;
    padding: 8px 12px;
    width: 90px;
`

export default function Form(props) {
  return (

    <StyledFormContainer>

      <StyledForm onSubmit={(e) => props.handleSubmit(e)}>

        <StyledInput type="text" placeholder="Add a task" onChange={(e) => props.handleChange(e)} value={props.input} />
        
        <StyledButton

          disabled={props.input.trim() === '' ? true : false}
          onSubmit={(e) => props.handleSubmit(e)}> Submit

        </StyledButton>
      
      </StyledForm>

      <StyledButton onClick={(e) => props.handleClear(e)}>

        Clear Completed

      </StyledButton>
    
    </StyledFormContainer>

  )

}