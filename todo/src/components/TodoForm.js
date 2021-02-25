import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoSwitchReducer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import MaskUp from '../assets/maskup.jpg'

const useStyles = makeStyles({
  root: {
    minWidth: 550,
    maxWidth: 650,
    minHeight: 475,
    borderRadius: "50%",
    margin: "7rem 5%",
    textAlign: "center",
    backgroundImage: `url(${MaskUp})`,
    backgroundPosition: 'center center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 0 3rem orangered',
    transition: 'boxShadow 100ms ease-out'

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TodoForm() {
  const classes = useStyles();

  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };

  const completed = (item) => {
    if (item) {
      return "completed";
    }
  };

  return (
    <div style={{paddingBottom: '4rem'}}>
      <form position="sticky" className="bg-dark" onSubmit={handleSubmit}>
        <TextField
          name="newTodo"
          id="newTodo"
          type="text"
          onChange={handleChanges}
          color='inherit'
          value={newTodo}
          placeholder="Enter Todo"
          helperText='Click your task to mark as done then hit the button and POP!!'
          style={{color: 'white', margin: '2rem 0', backgroundColor: 'white', padding: '1.5rem'}}
        />
        <Button variant='outlined' size='large' color='primary' style={{margin: '4rem 2rem'}}
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
        >
          Add Todo
        </Button>
       
      </form>

      {state.map((item) => {
        return (
          <Card className={classes.root} variant="outlined">
            <CardContent style={{backgroundColor: '#222', opacity: '0.8'}}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2 style={{ margin: "6rem 2rem", marginBottom: '1rem', color: 'white', textShadow: '0 0 1.5rem orangered' }}>I feel like I need to...</h2>
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
                <h1 style={{ fontSize: "3rem", padding: "0 5rem", color: 'white', textShadow: '0 0 1.5rem orangered' }}>
                  {item.task}!!
                </h1>
              </Typography>
            </CardContent>
            <CardActions className="d-flex justify-content-center" style={{backgroundColor: '#222', opacity: '0.8'}}>
              <Button
                variant="contained"
                size="small"
                style={{backgroundColor: 'red', color: 'white', marginBottom: '6rem', maxWidth: '35%', maxHeight: '20%', boxShadow: '0 0 1.5rem orangered'}}
                onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
              >
                <h5 style={{paddingBottom: '1rem'}}>HURRY! Pop me!!</h5>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
