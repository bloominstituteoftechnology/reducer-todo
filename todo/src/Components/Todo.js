import React, { useState, useReducer } from "react";

import {

  initTodoState,
  todoReducer,
  TOGGLE_DONE,
  SET_TODO

} from "../reducers/todoReducer";

/*
  what is a reducer?
  1. reducer is a function that takes 2 arguments: (state={}, action={})
  2. reducer will then, based on the action, create a new state from existing state
  3. if the reducer is not interested in the action, it returns the existing state
  4. reducer will return the new state

  define action:
  1. object that has a required `type` key <---- - Required
  2. object that has an optional `payload` key (doesn't need to be called payload) <--- -Not required
*/

const Todo = (props) => {
  const [newTodoText, setNewTodoText] = useState();
  const [state, dispatch] = useReducer(todoReducer, initTodoState);

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  return (
    <div>
      
        <h1>
          {state.todo}{" "}
          <i
            className="far fa-edit"
            onClick={() => { 
              dispatch({ type: TOGGLE_DONE });
            }}
          />
        </h1>

        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({
                type: SET_TODO,
                payload: newTodoText
              });
              // dispatch({
              //   type: "TOGGLE_EDITING"
              // });
              // setTitle(newTitleText);
              // setEditing(false);
              // setNewTitleText("");
            }}
          >
            New Todo
          </button>
        </div>
    
    </div>
  );
};

export default Todo;
