import React, { useReducer } from 'react'
import { initialNoteState, noteReducer} from "./reducer";

const Notes = (props) => {
//     const [noteState, dispatch] = useReducer(noteReducer, initialNoteState);
//    console.log('note',props);
    // const handleClick = e =>{
    //     // props.TOGGLE_TODO(props.note.id)
    //     dispatch({type: 'TOGGLE_TODO', id: e.target.id})
    // }
    console.log('props from Notes', props);
    return (
        <div
            className={`${props.note.completed ? "note completed" : "note"}`}
        >
            <p id={props.note.id} onClick={e => props.handleClick(e)}>{props.note.item}</p>
            
        </div>
    )
}

export default Notes;