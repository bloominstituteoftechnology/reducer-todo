import React from 'react';
import Todo from './Todo';

export default function TodoList({toggleComplete, todos}) {
    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return <Todo key={todo.id} toggleComplete={toggleComplete} todo={todo}/>
                })}
            </ul>
        </div>
    )
}