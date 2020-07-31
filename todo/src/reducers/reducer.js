// import React from "react";

export const initialState =  {
  todo: [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Push initial commit",
    completed: false,
    id: 3892987590,
  },
  {
    item: "Finish project",
    completed: false,
    id: 3892987591,
  },
  
]};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            task: action.payload,
            id: Date.now(),
            completed: false,
          },
        ],
      };

    case "CLEAR_ALL":
      return {
        ...state,
        todo: state.todo.filter((item) => !item.completed),
      };

    case "TOGGLE_ALL":
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return {
            ...item,
          };
        }),
      };

    default:
      return state;
  }
};
