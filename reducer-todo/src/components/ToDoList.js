import React, { useReducer, useState } from 'react';
import { initialState, reducer} from '../reducers/toDoReducer';
import ToDoCard from './ToDoCard';

const ToDoList = () => {

  const [noteState, dispatch] = useReducer(reducer, initialState);
  const [newNoteText, setNewNoteText] = useState('')

  const handleChanges = e => {
    setNewNoteText(e.target.value);
  }
  console.log(noteState);

  return (
    <div>
      <div>
        <label htmlFor="text">New Note Text: </label>
        <input 
          type='text'
          name='newNoteText'
          value={newNoteText}
          onChange={handleChanges}
        />
        <button 
          onClick={() => {
            dispatch({ type: 'CREATE_NOTE', payload: newNoteText})
          }}
        >Submit</button>
      </div>
      <div>
          {noteState.map(note => (
            <ToDoCard 
            item={note.item}
            completed={note.completed}
            id={note.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ToDoList;
