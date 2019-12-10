import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const handleToggle = e => {
        props.dispatch({type: 'TOGGLE_COMPLETED', payload: e.target.key})
    }
    return (
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} handleToggle={handleToggle}/>
            ))}
        </div>
    );
}

export default TodoList