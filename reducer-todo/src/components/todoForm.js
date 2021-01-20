import React, { useReducer, useState } from "react";
import Todo from "./todo";
import { ACTIONS} from "./action"
import { reducer} from "./reducer/reducer"

export default function TodoForm() {

  
    
   
  
  const [name, setName] = useState("")




const [todos, dispatch] = useReducer(reducer, []);



const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({ type: ACTIONS.ADD_TODO, payload:{name:name} });
  setName("")
};
const onChange = e => {
    setName(e.target.value)
  
  };
return(
  <>
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={onChange} type="text" />
  </form>
 { todos.map((todo) => {
      
  return  <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
    
  })}

</>
)
}