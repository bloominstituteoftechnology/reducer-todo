import { ADD_TODO, MARK_COMPLETE } from "../actions";

const initialState = {
  tasks: [{ item: "Learn about reducers", completed: false, id: 3892987589 }],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case MARK_COMPLETE:
      return {
        ...state,
        tasks: [...state.tasks, { ...state.tasks.completed, completed: true }],
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};
