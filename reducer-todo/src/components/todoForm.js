import React, { useReducer, useState } from "react";
import Todo from "./todo";
import { ACTIONS} from "./action"

export default function TodoForm() {
  
  const [name, setName] = useState("")


const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id){
          return { ...todo, complete: !todo.complete };
        
      } return todo
    })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const [todos, dispatch] = useReducer(reducer, []);

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
      
    <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
    
  })}

</>
)
}