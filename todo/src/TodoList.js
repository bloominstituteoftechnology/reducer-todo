import React from 'react';
import ToDo from './ToDo';

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            {props.todos.map((todo,i) => {
                return <ToDo key={i} todo={todo} dispatch={props.dispatch}/>
            })}
        </div>
    );
}

export default TodoList;
