import React from 'react'; 
import { TodoCard } from './TodoCard'; 

export const TodoList = (props) => {
    const { todos } = props; 
    console.log('new log', todos); 

    return (
        <div className="todo-list">
            {
                todos.map(todo => {
                    return <TodoCard todo={todo} key={todo.id} /> 
                })
            }
        </div>
    )
}

