import React from 'react'
import "../App.css"

const ToDo = ({item, dispatch}) => {

        return(

        <div id="completed" className={item.completed ? 'completed': ''} 

        onClick={() => dispatch({type: 'TOGGLE_LIST', payload: item.id})}>

        <p>{item.item}</p>

        </div>

        )

}

export default ToDo