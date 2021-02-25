import React from 'react'

const Todos = (props) => {
const  { todos } = props;
    
return(
    <div>
        {todos.map(todo => todo.item)}
    </div>
        )
};

export default Todos;