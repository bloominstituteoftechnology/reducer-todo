import React from 'react';
import Moment from 'react-moment';

const TodoItem = ({ todo, dispatch }) => {
    return (
        <div className='todo-item'>
            <span className='item' style={todo.completed ? {textDecoration: 'line-through'} : {}} onClick={() => dispatch({type: 'toggle', payload: todo.id})}>{todo.item}</span>

            {todo.timeCompleted && <p>Completion Time: <Moment>{todo.timeCompleted}</Moment></p>}
        </div>
    );
};

 export default TodoItem;  