import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";

import Todo from "./Todo";

const TodoList = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTitleText, setNewTitleText] = useState("");
    const [toggle, setToggle] = useState("");


    const handleChanges = e => {
    setNewTitleText(e.target.value);
    };

console.log(state)
return (

    <div>

        
          
  
      <div className="Container">
          
        {state.map(state=> {
            return(
                state.item
            )
            
        }
            )}
            <input
            className="Input"
            type="text"
            name="newTitle"
            value={newTitleText}
            onChange={handleChanges}
          />


           onClick={() => {
            dispatch({ type: "Toggle", payload: toggle });
            setToggle("");
          }}



        
        <button
        className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "AddTodo", payload: newTitleText });
            setNewTitleText("");
          }}
        >
          Add Item
        </button>




      </div>
    
  </div>
           

)

};

export default TodoList;