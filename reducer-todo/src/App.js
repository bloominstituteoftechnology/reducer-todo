import React, { useReducer } from 'react';
import Title from './components/Todo';
import AddTodo from './components/AddTodo';

import './App.css';
import { Reducer } from './reducers/Reducers';

function App() {
  return (
    <div className="App">
      <Reducer></Reducer>
     <Title>My To-Do List</Title>
     <AddTodo>

     </AddTodo>
    </div>
  );
}

export default App;
