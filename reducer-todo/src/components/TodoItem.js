import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
    return (
        <div className='todo-item'>
            <span className='item' style={todo.completed ? {textDecoration: 'line-through'} : {}} onClick={() => dispatch({type: 'toggle', payload: todo.id})}>{todo.item}</span>
        </div>
    );
};

 export default TodoItem;  