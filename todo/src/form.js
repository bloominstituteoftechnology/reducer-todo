import React, { useState, useReducer } from "react";
import {formReducer,initialState} from './reducer';
import './form.css';

export default function Form (){
    const [state,dispatch] = useReducer(formReducer,initialState);
    const editItem = e => {
        dispatch({ type: "CHANGE_COMPLETED" });
        setNewTodoText('');
      };
    const [newTodoText, setNewTodoText] = useState("");
    
    const handleChanges = e =>{
          setNewTodoText(e.target.value);
      };
    const changeItem = e => {
        dispatch({ type: "CHANGE_ITEM", payload: newTodoText });
      };
    return (
        <div>
       {state.completed?
       (<div>
           <input type='text' value={newTodoText} onChange={handleChanges}/>
           <button onClick={changeItem}>update</button>
       </div>
           ):(<div>
           <h2>{state.item.map(e=>(
               <h3 key={new Date()}>{e}</h3>
           ))}</h2>
               <button onClick={editItem}>add new toDo</button>
           
           </div>)
       }
        </div>
    )
}