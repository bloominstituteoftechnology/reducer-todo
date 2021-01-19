const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodo];
    case "COMPLETED":
      return state.map((e) =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );
    case "REMOVE":
      return state.filter((e) => !e.completed);

    default:
      return state;
  }
};

export { initialState, reducer };
