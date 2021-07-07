import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";



const TodoList = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTitleText, setNewTitleText,] = useState("");
    //const [toggle, setToggle] = useState("");


    const handleChanges = e => {
    setNewTitleText(e.target.value);
    };

console.log(state)
return (

    <div>

        
          
  
      <div className="Container">
          
            <h1>REDUCER TODO</h1>
            



        {state.map(state=> {
            return( 
            
                <div onClick={() => {
                    dispatch({ type: "Toggle", payload: state.id });
                    //setToggle("");
                  }} >

                  {state.item + ", "}
               
                  
                  </div>
                  
            )
             
        }
            )}  


{/* Input field */}

        <input
            className="Input"
            type="text"
            name="newTitle"
            value={newTitleText}
            onChange={handleChanges}
          />

        {/* ADD TO DO */}
        <button
        className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "AddTodo", payload: newTitleText });
            
          }}
        >
          Add Item
        </button>

        {/* Subtract TO DO */}
        <button
        className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "SubtractTodo", payload: newTitleText });
            
          }}
        >
          Subtract Item
        </button>






      </div>
    
  </div>
           

)

};

export default TodoList;