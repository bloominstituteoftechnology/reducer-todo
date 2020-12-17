import {
  ADD_NEW_TODO,
  MARK_TODO_COMPLETED,
  REMOVE_TODO,
} from "../Actions/actions.js";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        id: Date.now(),
        completed: false,
        todo: action.payload,
      };
    case MARK_TODO_COMPLETED:
      return !state;
    case REMOVE_TODO:
      return !state;
    default:
      return state;
  }
};

export default todoReducer;
