import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import actions from '../actions.js/todoActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Todo = (props) => {

  let { todo, dispatch } = props;

  console.log(
    "Todo has been fired", todo
  )
  const classes = useStyles();
  const checked = todo.complete ? "checked" : "";

  return (
  <div className={classes.root}>
      <Paper 
        variant="outlined" 
        placeholder="test"
        elevation={3}
        square
      >
          {`${todo.item}`}
          {console.log ("props", props)}
          <input type="checkbox" id="{todo.id}" name="completed" checked={checked} onChange={() => dispatch(actions.toggleComplete(todo.id))}
          />
        </Paper>
    </div>
  );
}

export default Todo;