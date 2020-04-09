import React from "react";

export const initialTodo = [
  {
    item: "",
    completed: false,
    id: Date.now(),
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        },
      ];
    case "TODO_CLICKED":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
