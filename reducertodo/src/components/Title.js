import React, { useState, useReducer } from 'react';

import { titleReducer, initialState } from '../reducers/titleReducer';

// dispatch takes in an action object, and calls the reducer function with state and that action.

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState); // two args - reducer, initialState
  console.log(state, dispatch);
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              // setTitle(newTitleText);
              // setEditing(false);
              dispatch({ type: 'UPDATE_TITLE', payload: newTitleText });
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
