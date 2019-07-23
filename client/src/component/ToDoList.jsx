import React from 'react';
import ToDo from './ToDo';

export default function Display(props) {
    return (
        <div>
            {props.state.todos.map(i => {
                return <ToDo todo={i} key={i.id} toggleTask={props.toggleTask} clearCompleted={props.clearCompleted} />
            })}

            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}
