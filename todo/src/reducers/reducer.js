
export const todo = [
  {
    item: "Learn about reducers",
    completed: true,
    id: 3892987589
  },
  {
    item: "Help Dad with Application",
    completed: false,
    id: 389298
  },
  {
    item: "Take Spud on a Walk",
    completed: false,
    id: 3892987
  },
  {
    item: "Study Redux",
    completed: false,
    id: 38929875
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];

    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}; 