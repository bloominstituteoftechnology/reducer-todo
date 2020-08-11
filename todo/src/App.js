import React, { useState, useReducer } from "react";
import {initialState, reducer} from './Reducers/reducer'
import Form from './Components/Form'
import Todos from './Components/Todos'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
    .todo{
      background-color: #e64944;
      width: 45%;
      text-align: left;
      margin: 4px;
      padding-left: 8px;
      cursor: pointer;
    }

    .todo.completed{
      background-color: #d17d7c;
      /* background-color: blue; */
      text-decoration: line-through;
    }
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <StyledApp className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Form dispatch={dispatch}/>
        <Todos state={state} dispatch={dispatch}/>
    </StyledApp>
  );
}

export default App;
