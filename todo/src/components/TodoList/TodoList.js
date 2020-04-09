import React from 'react';
import Todo from './Todo/Todo';
import './scss/todolist.scss';

function TodoList(props) {

    console.log(props.state)
    return (
        <>
            <h1>Here are your todos:</h1>
            <div className="todo-container">
            {props.state.todos.map((todo) => 
                <Todo 
                    key={todo.id}
                    dispatch={props.dispatch({type: "TOGGLE COMPLETED", id: todo.id})}
                    item={todo.name}
                    completed={todo.completed}
                    />
            )}
            </div>
        </>
    );
}

export default TodoList;