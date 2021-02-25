import React, { useRef, useEffect, useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoSwitchReducer";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { TweenMax, Power3 } from "gsap";
import useStyles from "./useStyles";

export default function TodoForm() {
  //initializations
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const classes = useStyles();
  let card = useRef(null);

  //helper functions
  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  const completed = (item) => {
    if (item) {
      return "completed";
    }
  };

  //animation block
  const animatedState = state.length;

  useEffect(() => {
    //conditional useEffect add to cure crash when there are no items to be animate
    if (animatedState !== 0) {
      TweenMax.from(
        card, //item
        3, // duration
        {
          //gsap options
          opacity: 0,
          y: 200,
          ease: Power3.easeInOut,
        }
      );
    }
    //animation on triggers on state.length change (when an item is created or deleted)
  }, [animatedState]);

  return (
    <div style={{ paddingBottom: "6rem" }}>
      <form position="sticky" className="bg-dark d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
        <TextField
          className={classes.nav}
          name="newTodo"
          id="newTodo"
          type="text"
          onChange={handleChanges}
          color="inherit"
          value={newTodo}
          placeholder="Enter Todo"
          helperText="Click your task to mark as done then hit the button and POP!!"
          onSubmit={handleSubmit}
        />
        <Button
          className={classes.addButton}
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
            setNewTodo("");
          }}
        >
          Add Todo
        </Button>
      </form>
      {state.map((item) => {
        return (
          <Card
            className={classes.root}
            variant="outlined"
            ref={(element) => {
              card = element;
            }}
          >
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2 className={classes.h2}>I feel like I need to...</h2>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                key={item.id}
                className={completed(item.completed)}
                onClick={() =>
                  dispatch({ type: "TOGGLE_EDITING", payload: item.id })
                }
              >
                <h1 className={classes.h1}>{item.task}!!</h1>
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                variant="contained"
                size="small"
                className={classes.popButton}
                onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
              >
                <h5 style={{ paddingBottom: "1rem" }}>HURRY! Pop me!!</h5>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
