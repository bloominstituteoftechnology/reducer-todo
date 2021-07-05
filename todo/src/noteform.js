import React, { useState, useReducer } from 'react'
import { initialNoteState, noteReducer} from './reducer';
import Notes from './notes';

const NoteForm = () => {
	const [ noteState, dispatch ] = useReducer(noteReducer, initialNoteState)
	const [ newNoteState, setNewNoteState ] = useState('')
	const handleChanges = (e) => {
		setNewNoteState(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
        dispatch({ type: 'ADD_TODO', note: newNoteState })
        setNewNoteState("")
	}

	const handleClick = (e) => {
		// props.TOGGLE_TODO(props.note.id)
		dispatch({ type: 'TOGGLE_TODO', id: e.target.id })
    }
    
    const handleDelete = e =>{
        dispatch({type: 'DELETE_COMPLETED'})
    }

	console.log('noteState from noteForm', noteState)
	return (
		<div className="note_form">
			<input
				type="text"
				name="entry"
				placeholder="Enter Note Here"
				value={newNoteState}
				onChange={handleChanges}
			/>
			<button onClick={handleSubmit} type="submit">
				Add Note
			</button>
            <button onClick={handleDelete}>
                Clear
            </button>
			<div className="note_wrapper">{noteState.map((note) => <Notes note={note} handleClick={handleClick} />)}</div>
		</div>
	)
}
export default NoteForm