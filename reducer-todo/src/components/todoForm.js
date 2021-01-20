import React, { useReducer, useState } from "react";
import Todo from "./todo";
import { ACTIONS} from "./action"
import {reducer,todos} from "./reducer/reducer"

export default function TodoForm(props) {
  
  const [name, setName] = useState("")




const [todos, dispatch] = useReducer(reducer, todos);

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({ type: ACTIONS.ADD_TODO, payload:{name:name} });
};
const onChange = e => {
    setName(e.target.value)
  
  };
return(
  <>
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={onChange} type="text" name="item" />
  </form>
 { todos.map((todo) => {
      
  return  <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
    
  })}

</>
)
}