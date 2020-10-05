import React  from 'react'
import Todo from './Todo'

const TodoList =(props)=>{

   return (
      
           <div className='todo-list'>

           {props.todos.map((todo,index)=>
          
            <Todo toggleTodo={props.toggleTodo} key={index} toDo={todo}/>
            )}
           </div>
   )}

export default TodoList 