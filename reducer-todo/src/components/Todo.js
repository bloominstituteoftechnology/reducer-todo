import React from 'react';

const Todo = props => {
    return (
        <div className='todo'>
          <p><strong>Task:</strong>  {props.todo.item}</p>   
        </div>
    )
}

export default Todo;