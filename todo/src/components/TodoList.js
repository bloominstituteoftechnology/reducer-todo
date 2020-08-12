import React from 'react'; 
import { TodoCard } from './TodoCard'; 

export const TodoList = (props) => {
    console.log(props);
    const {todos} = props.state; 
    
    return (
        <div className="todo-list">
            {
                todos.map(todo => {
                    return <TodoCard todo={todo} key={todo.id} dispatch={props.dispatch} /> 
                })
            }
        </div>
    )
}

