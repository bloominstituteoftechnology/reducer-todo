import React, {useState} from "react";
import styled from "styled-components";

const StyledForm = styled.div`

`

export default function Form(props) {
  function handleChange(e) {
    props.setValue(e.target.value);
  }

  return (
    <StyledForm>
      <label htmlFor="title">Title
        <input 
          type="text" 
          name="title"
          value={props.value}
          onChange={handleChange} 
        />
      </label>
      <button onClick={()=>props.add(props.value)}>Add Todo</button>
      <button onClick={()=>props.clear()}>Clear Completed</button>
    </StyledForm>
  )
}
