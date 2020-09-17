import React, { useReducer } from "react";
// import ReactDom from 'react-dom'
// import { reducer, initialState}

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 20,
  },
  {
    item: "Cry about reducers",
    completed: false,
    id: 21,
  },
  {
    item: "Give up about reducers",
    completed: false,
    id: 22,
  },
];

export const reducer = (initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
  }
  return initialState;
};
