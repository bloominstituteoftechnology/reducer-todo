export const initialState = [
  {
    todo: "",
    completed: false,
    id: Date.now()
  }
];
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return [...state, action.payload];

    case "COMPLETED_TODO":
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });

    case "CLEAR_DONE":
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};
