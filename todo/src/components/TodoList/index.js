import React from 'react';
import Todo from './Todo';
import { Button } from 'reactstrap';
import '../../scss/todolist.scss';

function TodoList(props) {

    console.log(props.state)
    return (
        <>
            <h1>Here are your todos:</h1>
            <div className='button-container'>
                <Button color='danger' onClick={() => props.dispatch({type: 'CLEAR'})}>Clear Completed</Button>
            </div>
            <div className="todo-container">

            {props.state.todos.map((todo) => 
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    dispatch={props.dispatch}
                    item={todo.name}
                    dateCreated={todo.dateCreated}
                    completed={todo.completed}
                    />
            )}
            </div>
        </>
    );
}

export default TodoList;