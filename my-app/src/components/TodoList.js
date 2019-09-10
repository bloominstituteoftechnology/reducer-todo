import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";

const TodoList= () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);


return (

        <div>   
            <button
            onClick={() => {
              dispatch({ type: "UPDATE_TITLE"});
              setNewTitleText("");
            }}
          >
            BTN CLICK
           </button>
    
       </div>

)


};