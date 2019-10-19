import React from 'react';

function Todo({ title, id, completed }) {
    return(
        <div className={completed ? 'completed' : 'not-completed'}>
            <h2>{title}</h2>
            <h3>ID: {id}</h3>
        </div>
    )
}

export default Todo;