import { ADD_NEW_TODO } from "../Actions/actions.js";

const todoReducer = (state, action) => {
   
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
          ...state, completed: false, todo: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
