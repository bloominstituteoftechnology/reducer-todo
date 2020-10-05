import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, dispatch}) => {
    return (
        <div>
            {todoList.map(todo => <TodoItem key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </div>
    );
};

export default TodoList;
