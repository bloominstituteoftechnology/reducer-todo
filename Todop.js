import React from "react"
const Todop = props =>{
    return(
        <div
            onClick= {event => props.toggleCompleted(props.item.id)}
            className={`item ${props.item.completed ? 'completed' : ''}`}
            >

            <p>{props.item.task}</p>
            
            </div>
    );
}

  export default Todop