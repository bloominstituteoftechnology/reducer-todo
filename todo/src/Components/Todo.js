import React, { useState, useReducer } from "react";

import {

  initTodoState,
  todoReducer,
  TOGGLE_DONE,
  ADD_TODO

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
//TODO: Switch Todo Form as Todo and TOdo as TodoForm 1 day
const Todo = (props) => {
  const [newTodoText, setNewTodoText] = useState();
  const [state, dispatch] = useReducer(todoReducer, initTodoState);

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  return (
    <div>
      
        <h1>
          {state.item}{" "}
          <i
            className="far fa-edit"
            onClick={() => { 
              dispatch({ type: TOGGLE_DONE });
            }}
          />
        </h1>

        <form>
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
                        type: ADD_TODO,
                        payload: newTodoText
                    });
                    }}
                >
                    New Todo
                </button>
            </div>
        </form>
    
    </div>
  );
};

export default Todo;
