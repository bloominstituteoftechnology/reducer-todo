import React, { useReducer, useState } from "react";
import Todo from "./todo";
import { ACTIONS} from "./action"


export default function TodoForm(props) {
     const {todos} =props
    
     const reducer = (todos, action) => {
        switch (action.type) {
          case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
          case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
              if (todo.id === action.payload.id){
                return { ...todos, complete: !todo.complete };
              
            } return todos
          })
          case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
      
          default:
            return todos;
        }
      };
  
  const [name, setName] = useState("")




const [state, dispatch] = useReducer(reducer, todos);

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
    <input value={name} onChange={onChange} type="text" />
  </form>
 { todos.map((todo) => {
      
  return  <Todo key={todo.id} todos={todos} dispatch={dispatch} />;
    
  })}

</>
)
}