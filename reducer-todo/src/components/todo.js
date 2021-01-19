import React, {useReducer} from 'react'
import Todo from "./todo"
import { initialState } from '../reducer/reducer'
  
export default function Todo() {
    const [state,dispatch] = useReducer()
    const    handleClick = () =>{
       handleToggle = (itemId)=> {
            
              state.initialState.map(item=>{
                if(item.id === itemId) {
                  return {
                    ...item,
                    completed: !item.completed
                  }
                
                }else {
                return(item);
              }
              })
            ;
          }
         }




    return (
        <div  className={`item ${props.item.completed ? ' completed' : ''}`} onClick = {handleClick}>
       <p>{item.task}</p>  

           </div>
    )
}
