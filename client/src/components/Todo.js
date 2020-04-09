import React from "react"

const Todo = () => {
   //state hook
   const [addItem, setAddItem] = useState();
   //this hook will hook our state up to our reducer
   const [state, dispatch] = useState();

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
      setNewItem("");
      dispatch({ type: "UPDATE_ITEM", payload: addItem || state.item})
   };

   return (
      <div>
         {state.completed ? (
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  name="addItem"
                  placeholder={state.item}
                  value={setAddItem}
                  onChange={handleChanges}
               />
               <button type="submit">Add Todo</button>
            </form>
         ) : (
            <div>
               <h1>{state.item}</h1>
               <button onClick={handleToggle}>Completed</button>
            </div>
         )}
      </div>
   );
};

export default Todo
