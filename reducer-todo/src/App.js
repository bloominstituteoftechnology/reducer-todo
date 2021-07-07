import React, { useState, useReducer, useEffect } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import moment from "moment";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';


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
    width: 400,
    height: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
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
    flexDirection: "column",
    alignItems: "center"
  },
  submitButton: {
    marginTop: 20
  },
  list: {
    background: "white",
    width: 400,
    margin: "20px 0",
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px",
    borderRadius: 3
  },
  todoDiv: {
    display: "flex",
    alignItems: "center"
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  doneTime: {
    color: "grey"
  },
  dueDateField: {
    width: 250,
    margin: "20px 0"
  },
  description: {
    fontWeight: 600,
    fontSize: "18px"
  },
  overDueText: {
    color: "red"
  },
  dueText: {
    color: "blue"
  },
  completedText: {
    color: "green"
  },
  todoDescriptionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300
  },
  emptyTodosHeader: {
    textAlign: "center"
  },
  todoTag: {
    fontSize: 25
  }
});

function App() {
  const classes = useStyles();
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(moment().valueOf());
  const [tag, setTag] = useState("study")
  const [time, setTime] = useState(moment().valueOf());

  const c = console.log;

  const handleOnSubmit = e => {
    e.preventDefault();
    if (description) {
      dispatch({ type: "ADD_TODO", payload: { description, dueDate, tag } });
      setDescription("");
    }
  };

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(moment().valueOf());
    }, 1000);
    return function cleanup() {
      clearInterval(updateTime);
    };
  }, [time]);

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
          <TextField
            label="Set due date"
            type="datetime-local"
            defaultValue={moment()
              .format()
              .slice(0, 16)}
            className={classes.dueDateField}
            onChange={({ target: { value } }) =>
              setDueDate(moment(value).valueOf())
            }
          />
          <InputLabel id="select-tag-label">Tags</InputLabel>
          <Select
            label="select-tag-label"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          >
            <MenuItem value="study">📚 Study</MenuItem>
            <MenuItem value="workout">💪 Workout</MenuItem>
            <MenuItem value="fun">😃 Treat yo self</MenuItem>
          </Select>
          <Fab
            className={classes.submitButton}
            variant="extended"
            size="medium"
            color="primary"
            onClick={e => handleOnSubmit(e)}
          >
            Add Todo
          </Fab>
        </form>
        <Fab
          variant="extended"
          size="medium"
          color="secondary"
          onClick={() => dispatch({ type: "CLEAR_CHECKED" })}
        >
          Clear completed
        </Fab>
      </Card>
      <List className={classes.list}>
        {todos.length === 0 && <h2 className={classes.emptyTodosHeader}>Add something to do here!</h2>}
        {todos.map(todo => {
          return (
            <ListItem key={todo.id} className={classes.listItem} divider>
              {time > todo.dueDate && (
                <h3 className={classes.overDueText}>🚨 OVER DUE!</h3>
              )}
              <div className={classes.todoDescriptionContainer}>
              <div className={classes.todoDiv}>
                <Checkbox
                  checked={todo.done}
                  onChange={() =>
                    dispatch({ type: "CHECK_TODO", payload: todo.id })
                  }
                />
                <ListItemText>
                  <span className={classes.description}>
                    {todo.description}
                  </span>
                </ListItemText>
                
              </div>
              <span className={classes.todoTag}>{todo.tag}</span>
              </div>
              <ListItemText>
                <span className={classes.dueText}>Due date</span>:{" "}
                {moment(todo.dueDate).format("MMM Do YYYY h:mm a")}
              </ListItemText>
              {todo.doneTime && (
                <ListItemText className={classes.doneTime}>
                  ⭐ <span className={classes.completedText}>Completed</span>:{" "}
                  {todo.doneTime}
                </ListItemText>
              )}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default App;
