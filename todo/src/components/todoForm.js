import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: auto;

    input {
        width: 75%;
    }
    .inputbox{
        margin-top: 1rem;
    }
    button {
        margin-left: 1rem;
    }

`

const ToDoForm = ({ dispatch }) => {

    const [newItem, setNewItem] = useState();

    const submitHandler = event => {
        event.preventDefault();
        setNewItem('');
    };

    const handleChange = event => {
        setNewItem(event.target.value);
    };

    return (
        <StyledForm>
            <form onSubmit={submitHandler}>
                <input
                    name='item'
                    type='text'
                    value={newItem}
                    onChange={handleChange}
                />
                <button onClick={()=>dispatch({type: 'ADD_TODO', payload: newItem})}>Add</button>
                <button onClick={()=>dispatch({type: 'CLEAR_COMPLETED'})}>Clear</button>

            </form>
        </StyledForm>
    );
};

export default ToDoForm;