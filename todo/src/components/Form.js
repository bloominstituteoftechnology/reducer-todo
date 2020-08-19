import React, {useState, useReducer} from "react";
import { initialState, listReducer } from "../reducers/indexReducer"



const Form = () =>{
const [newText, setNewText] = useState("");
const [state, dispatch] = useReducer(listReducer, initialState);

    const handleChanges = (e) => {
        setNewText(e.target.value);
        console.log("going through handleChange")
    };

    



return(
        <div>
          {!state.completed ? (
             <h3>
            {state.title}{""}
             <i 
                onClick = {() => {
                    dispatch({item: "TOGGLE_COMPLETED"});
                }}
                className = "list"
            />
           </h3>
         ) : (
             <div>
               <input className = "TODO"
                type= "text"
                name = "item"
                value= {newText}
                onChange = {handleChanges}
                />
                <button
                    onClick={ ()=>{
                        dispatch({type: "UPDATE_ITEM", payload: newText})
                    }}
                >
                    Add to List
                </button>
        
    
        </div>
         )}
    </div>

  );

};



export default Form;
