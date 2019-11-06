import React from 'react';
import styled from 'styled-components'

const TodoDiv = styled.div`
border: solid rgb(48,60,46);
background: rgb(245,218,207, 0.8);
color: rgb(163,197,77);
border-radius: 12px;
width: 350px;
height: auto;
margin: 0 auto;`

const Todo = props => {
  const {toggleComplete} = props;
  const { id, item, completed } = props.todo;
console.log(props.todo)
  return (
    <TodoDiv><h5
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(id)}
    >
      {item}
    </h5></TodoDiv>
  );
};

export default Todo;