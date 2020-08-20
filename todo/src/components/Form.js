import React, {useState, useReducer} from "react";
//import { listReducer, initialState } from "../reducers/indexReducer"
import { actions, initialState, listReducer, newToDo } from "../reducers/indexReducer.js";


const Form = () =>{

    const [todos, dispatch] = useReducer(listReducer, []);
    const [newText, setNewText] = useState("");



//const [state, dispatch] = useReducer(listReducer, initialState);

    // const handleChanges = (e) => {
    //     setNewText(e.target.value);
    //     console.log("going through handleChange")
    // };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: actions.ADD_TODO, payload: {name: newText} });
        setNewText("");
        console.log("hey hey hanldeChange", {type: actions.ADD_TODO});
    }

    console.log(todos);

  

    
return(
    <>
        <form onSubmit = {handleSubmit}>
            <input type= "text" value= {newText} onChange={e => 
             setNewText(e.target.value)} />
        </form>

     </>  

    );

};



export default Form;


{/* <div> Edit Me!
{state.completed ? (
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
</div> */}
