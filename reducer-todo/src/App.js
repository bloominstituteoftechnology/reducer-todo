import React, {useReducer} from 'react';
import Title from '../src/components/Title';
import ReactDOM from 'react-dom';
import {todoReducer, initialState, ADD_ITEM, TOGGLE_COMPLETED, CLEAR_TODO} from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addItem = item => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };

  const clearItems = () => {
    dispatch({
      type: CLEAR_TODO
    });
  };
  
  return (
    <div className="App">
      <Title />
      <TodoForm addItem={addItem} clearItems={clearItems}/>
      <TodoList todos={state.todos} toggleItem={toggleItem}/>
    </div>
    
  );
}

export default App;
