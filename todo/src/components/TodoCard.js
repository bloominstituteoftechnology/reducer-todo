import React from "react";
import { Card, Slide, Paper, Typography, Collapse } from "@material-ui/core";
// import { todoReducer, initialTodoState } from "../reducers/reducer";
//, { useState, useReducer }
import "./TodoCard.css";

export default function TodoCard({state, handleClick}) {

  //TODO: bug where enough todos start to overlap input
  //TODO: make the cards look better, fix the tag, you can see the border around it, either make it fit inside better (a circle) or make it overlap the border
  //TODO: we want users to be able to add a description/plan out their task, so add a field for that
  //    *we want the description to be optional, and to be hidden behind a dropdown
  //TODO: the whole UI is not yet what we want
  //TODO: I want the todo input to display after we hit plus, then I want clear to appear, only when we have at least one task completed
  //TODO: colors need to match, clear button needs to match tag, same for add button
  //TODO: we want to sort todos by tag --> not to re-slide every time tho
  //TODO: I want some animation when the user hits clear --> fadout of completed tasks or (preferably) they slide out to the right and the others fill the space left behind
  //TODO: I'd like the completed tag to slide down when completed and slide up if deselected
  //TODO: make the green more pleasing

  return(
    <div class="todoCards">
      {state.map(todo => (
        // fade in feels like delay in adding todo, slide in feels nice
        <Slide direction="right" in={true} timeout={{enter: 1200}}>
          <Paper variant="outlined" elevation="15" square={true} key={todo.id} onClick={() => handleClick(todo)}>
            <div className="todo">
              { todo.completed ? 
                  <div className="completed" color="secondary" />
                : 
                  <div className="incomplete" />
              }
              <Typography variant="h6">
                {todo.item}
              </Typography>
            </div>
          </Paper>
        </Slide>
      ))}
    </div>
  )
}