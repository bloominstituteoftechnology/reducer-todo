import React, { useState, useReducer } from "react"
import '../App.css';
import { initialState, reducer } from '../reducers/reducer.js';


const Todo = () => {
   //state hook
   const [addItem, setAddItem] = useState();

   //this hook will hook our state up to our reducer
   const [state, dispatch] = useReducer(reducer, initialState);

   //toggle handler
   const handleToggle = e => {
      e.preventDefault();
      dispatch({ type: "TOGGLE_COMPLETED" });
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
               <h1 className= {state.completed ? "completed" : ""}
                              onClick={handleToggle}
                              > 
                              {state.item}
               </h1>

               <button onClick={handleFilter}>Completed</button>
            </div> 
         
      </div>
   );
};

export default Todo
