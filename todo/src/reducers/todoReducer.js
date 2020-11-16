export const TOGGLE_DONE = "TOGGLE_DONE";
export const ADD_TODO = "ADD_TODO";

export const initTodoState = {

  
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  
};

export const todoReducer = (state, action) => {
  console.log(`NAL todoReducer.js: state,action: `, state, action);

  switch (action.type) {
    case TOGGLE_DONE:
      return {
        ...state,
        completed: true
      };
    case ADD_TODO:
      return {
        ...state,
        item: action.payload,
        completed: false
      };
    default:
      return state;
  }
};