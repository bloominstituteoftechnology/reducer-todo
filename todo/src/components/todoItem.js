import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    border: lightgrey 1px solid;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 1rem;
`

const ToDoItem = ({ item, dispatch }) => {

    return(
        <StyledItem id='completed' className={item.completed ? 'completed': ''} onClick={()=>dispatch({type: 'TOGGLE_LIST', payload: item.id})}>
        <p>{item.item}</p>
        </StyledItem>
    );
};

export default ToDoItem;