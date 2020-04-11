import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer.js'
import Todo from './components/Todo.js'





function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
