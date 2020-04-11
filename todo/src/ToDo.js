import React from 'react';

const ToDo = (props) => {
    return (
        <div>
            <h1 className={props.todo.completed? 'completed' : ''}onClick={() => props.dispatch({type:'MARK_COMPLETED', payload:props.todo.id})}>{props.todo.message}</h1>
        </div>
    );
}

export default ToDo;
