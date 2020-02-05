import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer.js';
import { ToDo } from "./Todo";
import { TodoForm } from './TodoForm.js';

export const List = props => {
const [state, dispatch ] = useReducer( todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  console.log("state in ToDoList",state)

  const handleChanges = event => {
    setNewTodo(event.target.value);
 };
 const handleSubmit = event => {
    event.preventDefault();
  };
  

  return (
    <div>
         <TodoForm
            handleChanges = {handleChanges}
            handleSubmit = {handleSubmit}
            newTodo = {newTodo}
            dispatch = {dispatch}
        />
        <div>{state.items.map(todo => (
            <div  key = {todo.id} >
                <ToDo 
                    dispatch = {dispatch}
                    key = {props.id} 
                    todo = {todo} 
                />
            </div> 
        ))}
        </div>
    </div>
  )
};