import React, { useState, useReducer } from 'react';
import { initialState, reducerToDo } from '../reducers/Reducer'

const ToDo = () => {

    const [newToDo, setNewToDo] = useState("");
    const [state, dispatch] = useReducer(reducerToDo, initialState);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };

    return (
        <div>
            {!state.completing ? (
                <h1>
                    {state.ToDo}{" "}
                    <i
                    onClick={() => dispatch({type: "TOGGLE_COMPLETED"})}
                    />
                </h1>
            ) : (
                <div>
                    <input
            className="toDo-name"
            type="text"
            name="newToDo"
            value={newToDo}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "ADD_TODO", payload: newToDo });
            }}
          >
            Add New Task
          </button>
                </div>
            )}
        </div>
    );
};

export default ToDo;