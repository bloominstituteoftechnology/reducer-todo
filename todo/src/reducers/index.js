import { HOLD_TODO, MARK_COMPLETE } from "../actions";

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
    case MARK_COMPLETE:
      return {
        ...state,
        completed: true,
      };
    default:
      return state;
  }
};
