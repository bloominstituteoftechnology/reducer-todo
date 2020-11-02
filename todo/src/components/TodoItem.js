import React from 'react'
import styled from 'styled-components'
const StyledTodoItem = styled.div`
&.completed {
  text-decoration: line-through;
}
  
`

function TodoItem(props) {
  return (
      <StyledTodoItem id={props.todo.id} onClick={props.changeCompleted} className={props.todo.completed ? 'completed' : null}>{props.todo.item}</StyledTodoItem>
  )
}

export default TodoItem