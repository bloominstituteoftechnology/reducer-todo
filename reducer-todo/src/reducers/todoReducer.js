export const todoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map()
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map()
      };
    default:
      return state;
  }
};

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};
