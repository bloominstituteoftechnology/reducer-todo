import React from 'react';
import TodoComponent from './TodoComponent'

function TodoList(props){
    console.log(props)
    return(
        <div>
        {props.todos.map(todo => {
                return   <TodoComponent todo = {todo} toggleComplete={props.toggleComplete}/>
            }) 
        }
      </div>
    )
}

export default TodoList