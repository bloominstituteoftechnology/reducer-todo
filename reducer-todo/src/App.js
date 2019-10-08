import React, {useReducer} from "react";
import { initialState, reducer } from './reducer/reducer';
import TodosForm from "./components/TodosForm";
import TodosList from "./components/Todolist";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const  addTodo =  event  => {
      event.preventDefault();
        dispatch({ type:"ADD_TODOS", payload: state.todo});
      };
    
     const handleChange = event => {
       dispatch({ type:"HANDLE_CHANGE", payload: event.target.value });
      };
    
      const toggleComplete = todo => {
       dispatch({ type:"TOGGLE_COMPLETE", payload: todo});
      };
    
     const  clearCompleted = () => {
        const newTodos = state.todos.filter(todo => !todo.isCompleted);
        dispatch({ type:"CLEAR_COMPLETED", payload: newTodos });
      };

  return (
          <div>
            <h1>Todo List</h1>
            <TodosForm
              title={state.todo}
              onChange={handleChange}
              addTodo={addTodo}
              clearCompleted={clearCompleted}
            />
            <TodosList
              todos={state.todos}
              onToggleComplete={toggleComplete}
            />
          </div>
        );
}

 export default App;
