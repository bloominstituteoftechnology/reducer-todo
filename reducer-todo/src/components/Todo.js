import React from 'react'

// import './Todo.css'

const Todo = props => {
    console.log("item",props)
    return (
        <div 
        className={
            `item${props.item.finished ? 'finished' : ''}`}
            onClick={()=> props.toggleItem(props.item.id)}
            >
            <p>{props.item.what}</p>
        </div>
    )
}

export default Todo