import React, {useState, useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';

import TodoList from './TodoList';


const TodoForm = () => {
const [todoState, dispatch] = useReducer(reducer, initialState);
  const [newTaskText, setNewTaskText] = useState('');

  console.log(todoState)

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: newTaskText})
    setNewTaskText("")
  };

  const handleClear = e => {
      e.preventDefault();
      dispatch({ type: 'CLEAR_COMPLETED'})
  };

  const handleToggle = e => {
      dispatch({type: 'TOGGLE_COMPLETED', payload: e.target.key})
  }

    return (
        <>
        <div>
            <TodoList todo={todoState} dispatch={dispatch}/>
        </div>
        <form>
            <input type='text' name='newTaskText' value={newTaskText} onChange={handleChanges} />
            <button onClick={handleSubmit}>Add Task</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
        </>
    )
}

export default TodoForm