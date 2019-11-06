import React from 'react'

const TodoCard = props => {

    return(
        <div key = {props.id} className= "todoCard">
            <h2>{props.item}</h2>
            
        </div>
    )
}

export default TodoCard;