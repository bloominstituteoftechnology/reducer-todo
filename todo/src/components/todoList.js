import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  .completed{
    text-decoration: line-through;
  }
`

export default function List(props) {

  return (
    <StyledList>
      {props.state.map((item, idx) => {
        return <p key={idx} className={item.completed ? "completed" : ""} onClick={props.toggle}>{item.item}</p>
      })}
    </StyledList>
  )
}