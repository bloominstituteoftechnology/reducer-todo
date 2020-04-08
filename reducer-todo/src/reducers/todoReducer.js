
export const initialTodoState = [
  {description: "Stuff"},
  {description: "more stuff"},
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { description: action.payload }
      ]
    default:
      return state;
  }
};
