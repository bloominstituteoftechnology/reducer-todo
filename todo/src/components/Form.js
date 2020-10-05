import React, {useState, useReducer} from "react";
//import { listReducer, initialState } from "../reducers/indexReducer"
import { actions, initialState, listReducer, newToDo } from "../reducers/indexReducer.js";
import ToDo from "../components/ToDo";
import App from "../App.css"

const Form = () =>{

    const [todos, dispatch] = useReducer(listReducer, []);
    const [name, setName] = useState("");



//const [state, dispatch] = useReducer(listReducer, initialState);

    // const handleChanges = (e) => {
    //     setNewText(e.target.value);
    //     console.log("going through handleChange")
    // };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: actions.ADD_TODO, payload: {name: name} });
        setName("");
        console.log("hey hey hanldeChange", {type: actions.ADD_TODO});
    }

    console.log(todos);

  

    
return(
    <> 
        <form onSubmit = {handleSubmit} className="form"> What's on your list?
            <input type= "text" value= {name} onChange={e => 
             setName(e.target.value)} />
        </form>
        {todos.map(todo =>{
           return <div className = "Item"><ToDo key={todo.id} todo={todo} dispatch = {dispatch} /></div>
        })}

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
