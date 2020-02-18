import React from 'react';
import Todo from './Todo'

const TodoList = (props) =>{

    return(
        <div>
            Hello world from Todolist
            {props.taskItem.map(item=>(
  <Todo key={item.id} item={item} toggleItem={props.toggleItem} />))}
        </div>
    )
}

export default TodoList;