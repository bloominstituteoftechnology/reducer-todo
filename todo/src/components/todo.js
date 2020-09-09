import React from 'react'

const ToDo = ({item, dispatch}) => {
    
   
        return(
        <div className={item.completed ? 'completed': ''} 
        onClick={() => dispatch({type: 'TOGGLE_LIST', payload: item.id})}>
        <p>{item.item}</p>
        </div>
        )

}

export default ToDo