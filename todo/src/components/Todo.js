import React from 'react';
import moment from 'moment';

const Todo = props => {
    return (
    <div>
        {props.item.completed ?  
        <div className = 'item completed' onClick={() => props.toggleItem(props.item.id)}> 
        <p style={{textDecoration:'line-through'}}>{props.item.task}</p>
        <div>
        <p className='date-completed'>Completed: {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
        </div>
        </div>
    :    
        <div
        onClick={() => props.toggleItem(props.item.id)}
        className={`item`}
        >
        <p>{props.item.task}</p>
        </div>
        }
    </div>
    
    );
}

export default Todo;