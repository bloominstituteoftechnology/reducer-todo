import React, { useState} from "react";
import { reducer,initialState } from "../reducer/reducer";


export const ToDoForm = ({dispatch}) => {

  const [newToDo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <label className='sronly' >To-Do Input:</label>
      <input
        className="todoInput"
        placeholder='My To-Do'
        type="text"
        name="newTodoInput"
        onChange={handleChanges}
        value={newToDo}
      />
      <button onClick={() => dispatch({ type: "ADD_TODO", payload:newToDo})}>
        add To-Do!
      </button>
    </div>
  );
};

export default ToDoForm