// export const initialState = [
//   {
//     item: "Learn about reducers",
//     completed: false,
//     id: 348384448239
//   },
//   {
//     item: "Do Dishes",
//     completed: false,
//     id: 348384448339
//   }
// ];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { todo: action.todo, completed: false }]
      };
    case "TOGGLE_COMPLETED":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        )
      };

    case "CLEAR_TODO":
      return {
        todos: state.todos.filter(item => {
          return item.completed === false;
        })
      };
    default:
      return state;
  }
};
