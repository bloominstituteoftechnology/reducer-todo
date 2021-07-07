import React, { useState, useReducer } from "react";
import { reducer, todo } from "../reducers/todoReducer";
import TodoList from "./TodoList";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));
const TodoForm = ({ dispatch }) => {
    const [item, setItem] = useState("");
    const classes = useStyles();

    // console.log("state.todo", state, todo);

    const handleChanges = e => {
        setItem(e.target.value);
    };


    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={submitForm}>
                    <label htmlFor="todo" hidden>
                        Todo
        </label>
                    <TextField
                        name="todo"
                        onChange={handleChanges}
                        value={item}
                        variant="outlined"
                    />
                    <button>Add Todo</button>
                    <button onClick={clearCompleted}>Clear Completed</button>
                </form>
            </div>
        </Container>
    );
};

export default TodoForm;