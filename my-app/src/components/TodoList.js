import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";


const TodoList= () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTitleText, setNewTitleText] = useState("");



    const handleChanges = e => {
    setNewTitleText(e.target.value);
    };

console.log(state)
return (

    <div>

        {/* <h1>HELLLOOO</h1> */}
  
  
      <div>
        {state.map(state=> {
            return(
                state.item
            )
            
        }
            )}
            <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />


        
        <button
        className="btn"
          onClick={() => {
            dispatch({ type: "UPDATE_TITLE" });
          }}
        >
          Click Button
        </button>
      </div>
    )}
  </div>
           

)

};

export default TodoList;