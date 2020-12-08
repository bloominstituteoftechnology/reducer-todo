import React from "react";
import Todo from "./Todo";

import reducer, { initialState } from "../reducers";

import { useReducer } from "react";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.todos);

  return (
    <div>
      <div>
        {state.todos.length > 0
          ? state.todos.map((todo) => {
              return <Todo key={todo} />;
            })
          : "No more todos!"}
      </div>
    </div>
  );
};
export default TodoList;
