import { ADD_TODO, MARK_TODO, CLEAR_TODO } from "../actions/actions";

export const initialState = {
  todos: [
    {
      name: "Test",
      completed: false,
      id: 1,
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case MARK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo, idx) =>
            todo.id === action.id
              ? todo
              : { ...todo, completed: !todo.completed }
          ),
        ],
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todos) => todos.id !== action.id)],
      };
    default:
      return state;
  }
};
export default reducer;
