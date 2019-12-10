import React, { useReducer } from 'react';
import { initialState, reducer} from '../reducers/toDoReducer';
import ToDoCard from './ToDoCard';

const ToDoList = () => {

  const [noteState, dispatch] = useReducer(reducer, initialState);
  console.log(noteState);

  return (
    <div>
        {noteState.map(note => (
          <ToDoCard item={note.item} />
        ))
      }
    </div>
  )
}

export default ToDoList;
