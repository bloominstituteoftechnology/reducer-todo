
import React from 'react';
import {Todo} from './todos';
// import { initialState as state}  from '../reducers/reducer';

// map 

export const TodoList=(props)=>{
    // console.log(props.)

    return (
        <div>
            {props.todos.map(task=>(
                <Todo key={task.id} task={task} toggled={props.toggled}/>
            ))}
        </div>
        )
}