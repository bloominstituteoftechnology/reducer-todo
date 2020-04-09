import React, { useReducer } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import TodoList from '../components/TodoList/TodoList';
import { reducerContainer, initialState } from '../reducers/reducerContainer';
import './scss/index.scss';


function App() {

  const [ state, dispatch ] = useReducer(reducerContainer, initialState);

  return (
      <div className="container">
        <Header state={state} dispatch={dispatch}/>
        <Main state={state} dispatch={dispatch}/>
        <TodoList state={state} dispatch={dispatch}/>
      </div>
  );
}

export default App;
