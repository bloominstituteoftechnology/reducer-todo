import React from 'react';
import Todo from './Todo/Todo';
import './scss/todolist.scss';

function TodoList(props) {

    console.log(props.state)
    return (
        <>
            <h1>Here are your todos:</h1>
            <button onClick={() => props.dispatch({type: 'CLEAR'})}>Clear Completed</button>
            <div className="todo-container">

            {props.state.todos.map((todo) => 
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    dispatch={props.dispatch}
                    item={todo.name}
                    completed={todo.completed}
                    />
            )}
            </div>
        </>
    );
}

export default TodoList;