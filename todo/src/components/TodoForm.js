import React, { useState } from "react"; 

function TodoForm() {
    const [newTodo, setNewTodo] = useState("")



    const handleChanges = (e) => {
      setNewTodo(e.target.value);
      console.log(e.target.value)
    }



    return (
        <form >
        <input 
            type="text"
            name="todo"
            placeholder="Enter A Task"
            onChange={handleChanges}
        />
         <button className="submit">Add Todo</button>
    </form> 
    )
}

export default TodoForm;