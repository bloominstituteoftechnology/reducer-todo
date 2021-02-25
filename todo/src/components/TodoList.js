import React from 'react';
import Todo from './Todo'

const TodoList = (props) =>{
    return(
    <div className='taskList'>
        {props.state.map((item)=>{
            return<Todo item={item} key={item.id} toggleComplete={props.toggleComplete} />
        })}
    </div>
    )
}

export default TodoList