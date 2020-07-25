import React from "react";
import { Card, Slide, } from "@material-ui/core";
// import { todoReducer, initialTodoState } from "../reducers/reducer";
//, { useState, useReducer }
import "./TodoCard.css";

export default function TodoCard({state, handleClick}) {

  return(
    <div class="todoCards">
      {state.map(todo => (
        // fade in feels like delay in adding todo, slide in feels nice
        <Slide direction="right" in={true} timeout={{enter: 1200}}>
          <Card key={todo.id} onClick={() => handleClick(todo)}>
            {todo.item}
          </Card>
        </Slide>
      ))}
    </div>
  )
}