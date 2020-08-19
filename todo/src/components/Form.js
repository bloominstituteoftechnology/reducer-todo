import React, {useState, useReducer} from "react";
import { listReducer, initialState } from "../reducers/indexReducer"



const Form = () =>{
const [newText, setNewText] = useState("");
const [state, dispatch] = useReducer(listReducer, initialState);

    const handleChanges = (e) => {
        setNewText(e.target.value);
        console.log("going through handleChange")
    };

    
return(

        <div> Edit Me!
          {!state.completed ? (
           <h3>
            {state.item}{""}
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
