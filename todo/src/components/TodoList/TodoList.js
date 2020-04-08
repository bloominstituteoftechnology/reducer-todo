import React from 'react';
import Todo from './Todo/Todo';
import './scss/todolist.scss';

function TodoList() {
    return (
        <>
            <h1>Here are your todos:</h1>
            <div className="todo-container">
                <Todo />
            </div>
        </>
    );
}

export default TodoList;