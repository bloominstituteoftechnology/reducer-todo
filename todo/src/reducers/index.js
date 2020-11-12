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
        tasks: [...state.tasks, action.payload],
      };
    case ADD_TASK:
      return {
        ...state,
      };

    default:
      return state;
  }
};
