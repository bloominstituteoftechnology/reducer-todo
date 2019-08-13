import React, { useContext, useRef, useState } from 'react';
import AppContext from './context/AppContext';
import { ADD_TODO } from './reducers/TodosReducer';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px'
};

function Form() {
    const [todoText, setTodoText] = useState('');
    const { todosDispatch } = useContext(AppContext);
    const inputField = useRef(null);

    function onInputChange(e) {
        setTodoText(e.target.value);
    }

    function clickHandler(e) {
        e.preventDefault();
        if (todoText.trim().length > 0) {
            todosDispatch({
                type: ADD_TODO,
                todo: {
                    text: todoText,
                    done: false
                }
            });
            setTodoText('');
            inputField.current.focus();
        }
    }

    return (
        <form style={style}>
            <input
                ref={inputField}
                value={todoText}
                onChange={onInputChange}
                type="text"
            />
            <button onClick={clickHandler} type="submit">
                Add
            </button>
        </form>
    );
}

export default TodosApp;
