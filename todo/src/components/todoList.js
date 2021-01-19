import React from 'react';
import Todo from './todo'

const TodoList = ({completeTodo, ListTodo}) => {

    return (
        <div className= 'TodoList'>
        {ListTodo.map(todo => <Todo key= {todo.id} todo={todo} completedTodo={completeTodo} />)}
        </div>
    )
}

export default TodoList ;