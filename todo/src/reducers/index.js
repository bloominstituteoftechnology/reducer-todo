import { HOLD_TODO, ADD_TASK } from "../actions";

const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
  tasks: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOLD_TODO:
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...action.payload],
      };

    default:
      return state;
  }
};
