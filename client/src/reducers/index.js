export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 348384448239
  },
  {
    item: "Do Dishes",
    completed: false,
    id: 348384448339
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return [
        ...state,
        { item: action.payload, completed: !state.completed, id: Date.now() }
      ];
    case "SET_COMPLETED":
      return { ...state, completed: !state.completed };
    case "CLEAR_TODO":
      return { ...state };
    default:
      return state;
  }
};
