import React, { useReducer } from "react";
import { Grid, Message, GridColumn } from "semantic-ui-react";

import { initialToDoTasks, toDoReducer } from "./reducers/todoReducer.js";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/TodoForm/TodoForm";
import ToDoTasks from "./components/TodoList/TodoList";
function App() {
  const [toDoTasks, dispatch] = useReducer(toDoReducer, initialToDoTasks);

  const addToDoTask = task => {
    console.log(task);
    dispatch({
      type: "ADD_TODO",
      todo: task
    });
  };

  const deleteToDoTask = taskID => {
    console.log(taskID);
    dispatch({
      type: "DELETE_TODO",
      id: taskID
    });
  };

  const completeToDoTask = taskID => {
    dispatch({
      type: "COMPLETE_TODO",
      id: taskID
    });
  };

  const undoCompletedToDoTask = taskID => {
    dispatch({
      type: "UNDO_COMPLETED_TODO",
      id: taskID
    });
  };

  const deleteCompletedToDoTask = () => {
    dispatch({
      type: "DELETE_COMPLETED_TODO"
    });
  };

  const hasToDoTasks = toDoTasks.length > 0;

  let displayToDoTasks;

  if (hasToDoTasks) {
    displayToDoTasks = (
      <ToDoTasks
        tasks={toDoTasks}
        completeToDoTask={completeToDoTask}
        deleteToDoTask={deleteToDoTask}
        undoCompletedToDoTask={undoCompletedToDoTask}
        deleteCompletedToDoTask={deleteCompletedToDoTask}
      />
    );
  } else {
    displayToDoTasks = <Message positive header="You do not have any todos" />;
  }
  return (
    <div className="App">
      <Navbar />
      <Grid stackable columns={2} padded="horizontally">
        <Grid.Column>
          <AddTodo newTask={addToDoTask} />
        </Grid.Column>
        <GridColumn>{displayToDoTasks}</GridColumn>
      </Grid>
    </div>
  );
}

export default App;
