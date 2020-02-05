import React from 'react'
import './App.css';
export const Display = (props) => {
    const toggler = (id) => {
        props.dispatch({type:"Checkoff", id:id})
    }
    return (
        <div>
          
{props.state.map(todo => {
                return (
                    <div className={`todo${todo.completed ? " completed" : ""}`} onClick={() => toggler(todo.id)} key={todo.id}>
                   <h1> {props.state.item}</h1>
                   </div>
                )
           })} 
         </div>
     );
 }
