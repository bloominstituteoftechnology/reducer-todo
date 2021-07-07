import React from 'react'

const TodoCard = props => {

    
console.log(props.item)
console.log(props.completed)
    return(
        <div 
        key = {props.id} 
        className= {`task${props.completed ? 'completed' : '' }`}
        onClick={() =>  {
            props.dispatch({ type: 'TOGGLE_TODO', payload: props.id })}
        }
        >
            <h2>{props.item}</h2>
            
        </div>
    )
}

export default TodoCard;