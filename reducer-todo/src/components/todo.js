import React from 'react'

export default function () {

    handleToggle = (itemId)=> {
        this.setState({
          todo: todo.map(item=>{
            if(item.id === itemId) {
              return {
                ...item,
                completed: !item.completed
              }
            
            }else {
            return(item);
          }
          })
        });

    const handleClick =( )=>{
        handleItemToggle(todo.id)
    }
    return (
        <div {`item ${todo.completed ? ' completed' : ''}`} onClick = {handleClick}>
            <p>{todo.task}</p>
        </div>
    )
}
