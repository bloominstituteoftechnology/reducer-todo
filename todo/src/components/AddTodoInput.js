import React, { useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import todoReducer from '../reducers/todoReducer';
import actions from '../actions.js/todoActions';
import {initialState} from "../reducers/todoReducer"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  fabButton: {
    position: 'absolute',
    width: '60px',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

// const useStyles = makeStyles((theme) => ({
//   text: {
//     padding: theme.spacing(2, 2, 0),
//   },
//   paper: {
//     paddingBottom: 50,
//   },
//   list: {
//     marginBottom: theme.spacing(2),
//   },
//   subheader: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   appBar: {
//     top: 'auto',
//     bottom: 0,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   fabButton: {
//     position: 'absolute',
//     zIndex: 1,
//     top: -30,
//     left: 0,
//     right: 0,
//     margin: '0 auto',
//   },
// }));

export default function AddTodoInput(props) {
  const classes = useStyles();
  const { dispatch } = props;

  // const [state, dispatch] = useReducer(todoReducer,initialState);
  // const dispatch = useDispatch(); // Redux
  const [newTodoText, setNewTodoText] = useState(''); // component-level state (keystroke tracking)


  // console.log("initial state from input", initialState)



  const handleChanges = e => {
    setNewTodoText(e.target.value);
  }; // handles input change

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField
        id="filled-basic" 
        value={newTodoText}
        onChange={handleChanges}
        label="Add Todo" 
        style={{backgroundColor: 'white', borderRadius: 5, opacity: .2}}
        variant="filled"
      />

      <Fab 
        color="secondary" 
        aria-label="add" 
        className={classes.fabButton}
        onClick={() => dispatch(actions.addTodo(newTodoText))}
      >
        <AddIcon />
      </Fab>
      

    </form>
  );
}