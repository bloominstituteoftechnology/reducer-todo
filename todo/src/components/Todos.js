import React, { useState, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';
import todoActions from '../actions.js/todoActions';
import { initialState } from '../reducers/todoReducer';

import Todo from './Todo';
import AppBarBottom from './AppBarBottom';
import '../App.css';



const Todos = (props) => {
  // console.log("Todos has been called")

  // const [state, dispatch] = useReducer(todoReducer, initialState);
  const {state, dispatch} = props;
  console.log("state in Todos: ", state)

  return (
    
    <div className='todo-container'>

        {
          state.todos.map((todo) => {
            return <Todo dispatch={dispatch} todo={todo} key={todo.id}/>
          })
        }

      <AppBarBottom dispatch={dispatch}/>

    </div>
    
  );
};

export default Todos;