import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const handleSubmit = () => {
        props.removeTodo();
    }

    return (
        <div>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}
            <button className='completed-btn' onClick={handleSubmit}>Clear Completed</button>
        </div>
    )
}
export default TodoList;