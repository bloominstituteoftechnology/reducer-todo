import React, { useReducer } from "react";
// import ReactDom from 'react-dom'
// import { reducer, initialState}

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  todoList: [
    {
      name: "Learn about reducers",
      completed: false,
      id: 2432543234,
    },
    {
      name: "Cry about reducers",
      completed: false,
      id: 16847546663,
    },
    {
      name: "Give up about reducers",
      completed: false,
      id: 1347888888,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        name: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        todoList: [...state.todoList, newItem],
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          console.log(item.id);
          return item;
        }),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};
