import React, {useReducer} from 'react';
import { initialState, reducer} from '../reducers/toDoReducer';

const ToDoCard = props => {
  const [noteState, dispatch] = useReducer(reducer, initialState);

  return(
    <div onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: props.id })}>
      <h3>{props.item}</h3>
      <p>{props.completed.toString()}</p>
    </div>
  )
}

export default ToDoCard;