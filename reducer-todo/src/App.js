import React, { useState, useReducer } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { todoReducer, initialTodoState } from "./reducers/todoReducer";

const useStyles = makeStyles({
  container: {
    width: "800px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  formCard: {
    width: 300,
    height: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 200,
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px"
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: 20
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  submitButton: {
    marginTop: 20
  },
  list: {
    background: "white",
    width: 300,
    marginTop: 20,
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px",
    borderRadius: 3
  }
});

function App() {
  const classes = useStyles();
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  const [description, setDescription] = useState("");
  const c = code => console.log(code);
  // c(todos);
  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: description });
    setDescription("");
  };
  return (
    <Container className={classes.container}>
      <Card className={classes.formCard} variant="outlined">
        <Typography className={classes.cardTitle}>Todo Reducer App</Typography>
        <form onSubmit={e => handleOnSubmit(e)} className={classes.form}>
          <TextField
            variant="outlined"
            label="Type here"
            value={description}
            onChange={({ target: { value } }) => setDescription(value)}
          />
          <Fab
            className={classes.submitButton}
            variant="extended"
            size="medium"
            color="primary"
          >
            Add Todo
          </Fab>
        </form>
      </Card>
      <List className={classes.list}>
        {todos.map((todo, i) => {
          return (
            <ListItem key={i} className={classes.listItem} divider button>
              <ListItemText>{todo.description}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default App;
