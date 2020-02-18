import React, {useReducer} from 'react';
import  {todoReducer, initialState} from './reducers/todoReducer';
import TodoList from './components/TodoList';

import './App.css';



function App() {
  const [state,dispatch] = useReducer(todoReducer,initialState);
  return (
    <div className="App">
      <TodoList todosArray={state.todosArray}/>

    </div>
  );
}

export default App;
