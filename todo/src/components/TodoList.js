import React, {useState, useReducer} from 'react';
import Todo from './Todo';
import {initialState, reducer} from '../reducers/reducer';

const TodoList = () => {

    const [{tasks}, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='todo-list'>
            {tasks.map(task=>(
                console.log(task),
                <Todo key={task.id} task={task}/>
            ))}
            
            <button className='clear-button' 
                onClick={()=> dispatch({type: 'TOGGLE_COMPLETED'})} >
                Remove Completed
            </button>
        </div>
    )
};

export default TodoList;