import React from 'react';
import ToDoItem from './todoItem';
import styled from 'styled-components';

const StyledList = styled.div`
    cursor: default;
    .completed {
        border: grey 1px solid;
        background-color: grey;
        color: lightgrey;
        font-style: italic;    
    }
`

const ToDoList = ({ state, dispatch }) => {
    return (
        <StyledList>
            {state.list.map(item => 
                <ToDoItem key={item.id} item={item} dispatch={dispatch}/>
            )}
        </StyledList>
    );
};

export default ToDoList;