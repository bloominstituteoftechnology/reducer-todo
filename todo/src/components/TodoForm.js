import React, { useRef, useEffect, useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoSwitchReducer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { TweenMax, Power3 } from "gsap";
import MaskUp from "../assets/maskup.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: "40%",
    maxWidth: "45%",
    minHeight: "42.5%",
    borderRadius: "50%",
    margin: "7rem 2.5%",
    textAlign: "center",
    backgroundImage: `url(${MaskUp})`,
    backgroundPosition: "left bottom",
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    boxShadow: "0 0 3rem orangered",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  nav: {
    color: "black",
    margin: "2rem 0",
    backgroundColor: "#f8d568",
    padding: "1.5rem",
  },
  addButton: {
    margin: "4rem 2rem",
  },
  cardContent: {
    backgroundColor: "#222",
    opacity: "0.8",
  },
  h2: {
    margin: "6rem 2rem",
    marginBottom: "1rem",
    color: "white",
    textShadow: "0 0 1.5rem orangered",
  },
  h1: {
    fontSize: "3rem",
    padding: "0 5rem",
    color: "white",
    textShadow: "0 0 1.5rem orangered",
  },
  popButton: {
    backgroundColor: "red",
    color: "white",
    marginBottom: "6rem",
    maxWidth: "35%",
    maxHeight: "20%",
    boxShadow: "0 0 1.5rem orangered",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#222",
    opacity: "0.8",
  },
});

export default function TodoForm() {
  const classes = useStyles();

  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  let card = useRef(null)

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

  const animatedState = state.length;

  
  useEffect(() => {
    if (animatedState !== 0 ){
   
    TweenMax.from(
      card, //item
      3, // duration
      {
        //gsap options
        opacity: 0,
        y: 200,
        ease: Power3.easeInOut,
      }
    );}
  }, [animatedState]);
  
  return (
    <div style={{ paddingBottom: "4rem" }}>
      <form position="sticky" className="bg-dark" onSubmit={handleSubmit}>
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
          style={{}}
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
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
