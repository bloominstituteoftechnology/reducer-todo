import React from 'react';
const Todo = (props) => {
    
    const {todo} = props
    return(<li>{todo.title}</li>)
}
export default Todo