import React, { useReducer } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import reducer, { initialState } from "../reducers/index";
import { addTodo, newTodo } from "../actions/index";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <Todo state={state} />
      </div>
      <div>
        <TodoForm
          addTodo={addTodo}
          newTodo={newTodo}
          dispatch={dispatch}
          state={state}
        />
      </div>
    </div>
  );
};

export default Body;
