 import React, { useReducer } from 'react'
import Todo from "../todo"
import { initialState } from '../reducer/reducer'
  

 
 



const TodoList = () => {
    return (
       <div>
       {initialState.map(item=>  (
        <Todo key={item.id} item={item} />
      ))}

    </div>
        
    )
       }
export default TodoList
