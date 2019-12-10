import React from 'react';
import styled from "styled-components"
import { Obj } from '../Styles/styles';

const Todo = props => {
  const { id, toggleComplete, todo, completed } = props;
  return (
    <Obj>
        <li
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(id)}
            >
            {todo}
        </li>
    </Obj>
  );
};

export default Todo;