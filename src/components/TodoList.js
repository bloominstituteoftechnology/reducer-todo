import React, { useReducer } from "react";
import { taskReducer, initialState } from "../reducers/reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const TodoList = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  

  return (
    <div className="list">
     <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;