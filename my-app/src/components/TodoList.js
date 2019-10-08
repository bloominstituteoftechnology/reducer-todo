import React from 'react';

const TodoList = (props) =>{
    console.log(props);
    return (
        <div>
            {props.state.todos.map(item => (
                <p>{item.item}</p>
            ))}
        </div>
    )
}

export default TodoList;