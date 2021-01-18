import React, { useState, useReducer } from "react";
import { initialState, todoReducer, ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from "../reducers/reducer";
import { TextField, Button, Fab, } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider } from "@material-ui/styles";
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

  const clearCompleted = () => {
    dispatch({
      type: CLEAR_COMPLETED
    })
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: red["A400"],
      },
    },
  });

  return (
    <div>

      <div className="todoContainer">
        <TodoCard state={state} handleClick={handleClick}/>
      </div>

      <ThemeProvider theme={theme}>
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
            color="secondary" 
            onClick={handleSubmit}
          >
            <AddIcon />
          </Fab>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => clearCompleted()}
          >
            Clear
          </Button>
        </div>
      </ThemeProvider>
    </div>
  )
}