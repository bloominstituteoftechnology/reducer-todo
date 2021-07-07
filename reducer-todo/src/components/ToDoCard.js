import React from 'react';

const ToDoCard = props => {

  return(
    <div onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.id })}>
      <h3>{props.item}</h3>
      <p>Completed? {props.completed.toString()}</p>
    </div>
  )
}

export default ToDoCard;