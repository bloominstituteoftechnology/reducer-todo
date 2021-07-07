import React from 'react';
import {initialState} from '../reducers/todoReducers';

const Todo = (props) => {
   
    return (
        <div className='todo-list'>
            {initialState.map(todo => {
                return (
                    <div style={todo.completed ? {textDecoration:'line-through'} : null} key={todo.id} >
                        <p onClick={() => {props.dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}}>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;