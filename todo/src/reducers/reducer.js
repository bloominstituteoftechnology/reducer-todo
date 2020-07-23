import React from "react";

export const initialState = [
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
];

export const reducer = (state, action) => {
  switch (action.type) {
    case EDIT_APP:
      return {};
    default:
      return state;
  }
};
