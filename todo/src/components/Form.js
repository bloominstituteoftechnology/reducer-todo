import React, {useState, useReducer} from "react";
import { initialState, listReducer } from "../reducers/indexReducer"



const Form = () =>{
const [newText, setNewText] = useState("");
const [state, dispatch] = useReducer(listReducer, initialState);

     handleChanges = (e) => {
        setNewText(e.target.value);
        console.log("going through handleChange")
    };

    



return(
    <div className = "formReturn">
        <h1>Hello from Form.js</h1>
        <div className = "list">
          {!state.completed ? (
             <h3>
            {state.title}{""}
             <i 
                onClick = {() => {
                    dispatch({item: TOGGLE_COMPLETED});
                }}
            />
           </h3>
         ) </div> : (
        
        

        
            <input className = "TODO"
                type= "text"
                name = "item"
                value= {!state.completed ? ({state.title}{""} <i onClick = {() => {
                    dispatch({item: TOGGLE_COMPLETED});
                }}
                )}
                onChange = {this.handleChanges}

            />
    
    </div>
)

};

export default Form;
