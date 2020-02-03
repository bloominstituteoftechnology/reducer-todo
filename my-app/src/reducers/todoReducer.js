export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: 1
  };
  
  export const toDoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          completed: !state.completed
        };
      case "ADD_TASK":
        return {
          ...state,
          item: action.payload,
          completed: false,
          id: new Date()
        };
      default:
        return state;
    }
  };