import React, { useReducer } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { reducerTodos, initialState } from "./reducers/reducerTodos";

function App() {
  const [state, dispatch] = useReducer(reducerTodos, initialState);
  console.log('initialState', state)

  const addNewTask = newTaskName => {
    dispatch({
      type: 'Add_New_Task',
      payload: newTaskName
    });
  }

    const toggleTask = clickedId => {
      dispatch({
        type: "Toggle_Task_Status",
        payload: clickedId
      })
    }
    const filterTasks = () => {
      dispatch({
        type: 'Filter_Completed_Tasks'
      })
    }

  return (
    <div className="App">
      <header>
        <h1>Lisa's Very Important Tasks!</h1>
      </header>
      <TodoForm
        addNewTask={addNewTask}
        filterTasks={filterTasks}
      />
      <TodoList
        tasks={state.tasks}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
