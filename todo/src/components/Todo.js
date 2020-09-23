import React, {Component, useState, useReducer} from "react"
import {initialTodoState, todoReducer} from "../reducers/todoReducer"

const Item = (props) => {
  //reducer
  const [newTodoItem, setNewTodoItem] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  console.log("km: App.js : Title: reducer state: ", state);

    return(
        <div onClick={()=> 
            {props.toggleItem(state.item.id)}} >
        <p className={state.item.completed ? "completed" : ""}>{state.item.name}</p>
        </div>
    )
};

export default Item;