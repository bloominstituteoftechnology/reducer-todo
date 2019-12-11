export const initialTodo = [
  {
    item: "Learn about reducers",
    completd: false,
    id: 1
  }
];

export const Reducer = (state, action) => {
  console.log("reducer", state, action);
  if (action.type === "ADD") {
    return [
      ...state,
      { item: action.payload, completed: false, id: Date.now() }
    ];
  } else if (action.type === "DELETE") {
    return state.filter(todo => !todo.completed);
  } else if (action.type === "COMPLETED") {
    return state.map(todo => {
      if (todo.id === action.payload) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }
};
