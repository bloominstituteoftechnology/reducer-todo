import './App.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



// npm install --save redux
// npm install --save react-redux
// npm install --save-dev redux-devtools

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id ,
  });
    if (!todos || !todos.length) {
    
  
      return <Typography> Add Some Todos </Typography>
     
  
}
return (
  <List>
 {todos.map(todo => <ListItem onClick={() => handleClick(todo.id)}>{todo.label}</ListItem>)}
  </List>
  )
}
 
const TodosInput = () => {
  const dispatch = useDispatch();
   const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
      const handleClick = () => dispatch({
        type: 'ADD_TODO',
        payload: {
          label: newTodo,
          id: Math.ceil(Math.random() * 100),
        }
      })

  return (
    <>
    <Input value={newTodo} onChange={handleChange} type='text'/>
    <br/>
    <br/>
    <Button  variant="contained" color="primary" onClick={handleClick}>Add Todo</Button>
    </>
  )
 
}

function App() {
  return (
    <div className="App">
    <Typography>React Redux Todo List</Typography>
    <br/>
    <br/>
    <TodosInput/>
    <Todos/>
    </div>
  );
}

export default App;
