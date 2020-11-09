import { ADD_TODO } from "../actions";

const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: Date(),
      };
    default:
      return state;
  }
};
