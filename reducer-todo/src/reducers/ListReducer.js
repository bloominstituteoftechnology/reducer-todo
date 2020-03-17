export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
  }
];

export const ListReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTodo];
    case "COMPLETED":
      return state.map(e =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );
    case "REMOVE":
      return state.filter(e => !e.completed);

    default:
      throw state;
  }
};
