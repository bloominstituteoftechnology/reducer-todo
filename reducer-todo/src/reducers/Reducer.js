//reducer
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_EDITING":
        return {
          ...state,
          completed: !state.completed
        };
      case "UPDATE_TITLE":
        return {
          ...state,
          completed: !state.completed,
          title: action.payload
        };
      default:
        return state;
    }
  };