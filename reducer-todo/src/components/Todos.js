import React from 'react';
import Todo from './Todo';

const Todos = props => {
    return (
        <div className='todos'>
          {props.todos.map(todo => (
             <Todo key={todo.id} todo = {todo} />
          ))}  
        </div>
     )
}

export default Todos;