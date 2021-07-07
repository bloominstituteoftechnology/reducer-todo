import React from 'react';
import './Todo.css';

export default function todo({todo, toggleComplete}) {
    return <li className={todo.completed ? 'completed' : ''}onClick={() => toggleComplete(todo.id)}>{todo.item}</li>
}