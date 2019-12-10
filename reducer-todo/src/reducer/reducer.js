import TodoList from "../components/TodoList";

export const todo = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "ADD_TODO":
      console.log("case state", state);
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