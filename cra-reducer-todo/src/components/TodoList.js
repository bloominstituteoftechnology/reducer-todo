import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
    return (
        <div className='todo-list-container'>
            {props.todosArray.map(e => (
                 <Todo  key={e.id} todo={e}/>
            ))}
           
        </div>
    )
}

export default TodoList