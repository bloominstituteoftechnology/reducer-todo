import React, { useReducer } from 'react';

import { initialState, todoReducer } from './reducers/ToDoReducer';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // constructor() {
  //   super()
  //   this.state = { toDoItems }
  // }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };
  // clearCompleted = () => {
  //   this.setState({
  //     toDoItems: this.state.toDoItems.filter(item => {
  //       if (item.completed) {
  //         return null
  //       } return item
  //     })
  //   })
  // }

  const toggleCompleted = (id) => {
    // console.log('this is id in togglecompleted dispatch: ', id);
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
  };
  // toggleCompleted = clickedItemId => {
  //   this.setState({
  //     toDoItems: this.state.toDoItems.map(item => {
  //       if (item.id === clickedItemId) {
  //         return { ...item, completed: !item.completed }
  //       } return item
  //     })
  //   })
  // }

  const addTodo = (input) => {
    dispatch({ type: 'ADD_TODO', payload: input });
  };

  // addToDo = itemName => {
  //   this.setState({
  //     toDoItems: [...this.state.toDoItems, {
  //       task: itemName,
  //       id: Date.now(),
  //       completed: false
  //     }]
  //   })
  // }

  return (
    <div className="body">
      <h1>To Do List:</h1>
      <br />
      <ToDoForm addToDo={addTodo} />
      <br />
      <ToDoList state={state} toggleCompleted={toggleCompleted} />
      <br />
      <button className="clear-btn" onClick={clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
}

export default App;
