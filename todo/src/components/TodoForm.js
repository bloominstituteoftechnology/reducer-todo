import React, { useState, useReducer } from "react";
import { initialState, todoReducer, ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from "../reducers/reducer";
import { TextField, Button, Paper, Fab, Fade, Slide, Typography, Card } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./TodoForm.css";
import TodoCard from "./TodoCard";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        item: newTodo,
        id: Date.now(),
        completed: false
      }
    });
    setNewTodo("");
  };

  const handleClick = todo => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: todo.id
    });
  };

  return (
    <div>

      <TodoCard state={state} handleClick={handleClick}/>

      <form onSubmit={handleSubmit}>
        <TextField 
          variant="outlined"
          placeholder="What do you have to do?"
          fullWidth={true}
          className="input"
          color="secondary"
          margin="normal"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
      </form>

      <div className="button-container">
        <Fab 
          size="small" 
          color="primary" 
          onClick={handleSubmit}
        >
          <AddIcon />
        </Fab>
        <Button variant="contained" color="secondary" onClick={() => {
          dispatch({
            type: CLEAR_COMPLETED
          })}}
        >
          <Typography variant="button">
            Clear
          </Typography>
        </Button>
      </div>

      {/* <div className="todo">
        <Slide direction="up" in={true} timeout={{ enter: 2000 }}>
          <Paper variant="outlined" elementType="p" elevation="10" square={false}>
            <Typography variant="h5">
              Buy Groceries
            </Typography>
          </Paper>
        </Slide>
        <Fab color="primary" size="medium" >
          <AddIcon />
        </Fab>
        <Fab color="secondary" size="medium">
          <RemoveIcon />
        </Fab>


        <Fade in={true} timeout={{ enter: 2000}}>
          <Typography variant="subtitle1">
            Hey
          </Typography>
        </Fade>
      </div> */}
    </div>
  )
}