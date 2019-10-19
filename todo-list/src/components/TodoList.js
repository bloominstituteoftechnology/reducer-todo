import React from 'react';
import Todo from './Todo';

function TodoList({ state, toggleTodo }) {
    console.log(state);
    return (
        <div>
            {state.todos.map((todo) => {
                return <Todo onClick={toggleTodo} title={todo.title} id={todo.id} completed={todo.completed} />
            })}
        </div>
    )
}

export default TodoList;