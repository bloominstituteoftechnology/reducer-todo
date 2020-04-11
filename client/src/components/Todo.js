import React, { useState, useReducer } from "react"
import '../App.css';
import { initialState, reducer } from '../reducers/reducer.js';


const Todo = () => {
   //state hook
   const [addItem, setAddItem] = useState();

   //this hook will hook our state up to our reducer
   const [state, dispatch] = useReducer(reducer, initialState);
   console.log("State:", state)

   //toggle handler
   const handleToggle = e => {
   
      e.preventDefault();
      console.log("e:", e.target.className)
      dispatch({ type: "TOGGLE_COMPLETED", payload: e.target.className });
   };

   //item changes handler
   const handleChanges = e => {
      setAddItem(e.target.value)
   };

   //submit handler
   const handleSubmit = e => {
      e.preventDefault();
      //empties the form after submitting
      // setNewItem("");
      dispatch({ type: "ADD_ITEM", payload: addItem || state.item})
      setAddItem("")
   };

   //filter handler
   const handleFilter = e => {
      e.preventDefault();
      dispatch({ type: "REMOVE_COMPLETED" })
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="addItem"
               placeholder="add next todo..."
               value={addItem}
               onChange={handleChanges}
            />
            <button onClick={handleSubmit}>Add Todo</button>
         </form>
         
         <div>
            
            {state.map(item=> 
               <h1 className= {item.completed ? "completed" : ""}
               key = {item.id}
               onClick={handleToggle}
               >
               <div className={item.id}>{item.item}</div>
               </h1>
            )}
            
            <button onClick={handleFilter}>Completed</button>
         </div> 
         
      </div>
   );
};

export default Todo
