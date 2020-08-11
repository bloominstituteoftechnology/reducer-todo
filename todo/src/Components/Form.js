import React, {useState} from "react";
// import {initialState, reducer} from './Reducers/reducer'

export default function Form(props) {

  const {dispatch} = props;
  const [newTaskText, setNewTaskText] = useState('')

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

    return (
      <div className="form">
          <label>Task: 
            <input
                type='text'
                name='task'
                value={newTaskText}
                onChange={handleChanges}
            />
          </label>
          <button onClick={()=>{
              dispatch({type: 'ADD_TASK', payload: newTaskText})
              setNewTaskText('')
          }}>Add</button>
          <button
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          >Clear</button>
      </div>
    );
  }
  