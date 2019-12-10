import React, { useReducer } from 'react';
import { initialState, reducer} from '../reducers/toDoReducer';
import ToDoCard from './ToDoCard';

const ToDoList = () => {

  console.log('initial state in ToDoList', initialState);

  return (
    <div>
        {initialState.map(note => (
          <ToDoCard item={note.item} />
        ))
      }
    </div>
  )
}

export default ToDoList;
