import React from 'react';

const Todo = props => {

    return (
        <div className={props.completed === true ? 'completed' : ''}>
            <h2>{props.task}</h2>
        </div>
    )
};

export default Todo;