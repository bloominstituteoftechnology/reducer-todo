import React, { useReducer, useState } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';
import Button from '@material-ui/core/Button';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import AppContext from './contexts/AppContext';
function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);

  // const itemchecked = (item_id) => {
  //   appState.find((el) => { el.id === item_id })
  // }

  return (
    <div className="App">

      <AppContext.Provider value={{ appState, dispatch }}>
        <TodoForm />
        <TodoList />
        <Button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear Completed</Button>
      </AppContext.Provider>
    </div>
  );
}

export default App;
