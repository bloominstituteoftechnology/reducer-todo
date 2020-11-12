export const TOGGLE_DONE = "TOGGLE_DONE";
export const SET_TODO = "SET_TODO";

export const initTodoState = {
  todo: "whatever you got to do on your busy schedule today :(!",
  doneit: false
};

export const todoReducer = (state, action) => {
  console.log(`NAL todoReducer.js: state,action: `, state, action);

  switch (action.type) {
    case TOGGLE_DONE:
      return {
        ...state,
        doneit: true
      };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
        doneit: false
      };
    default:
      return state;
  }
};