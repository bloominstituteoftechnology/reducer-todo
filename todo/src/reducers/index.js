import { addTodo, newTodo, completedTodo } from "../actions/index";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Make coffee",
      completed: false,
      id: 716786
    },
    {
      item: "Sleep",
      completed: false,
      id: 76129
    }
  ],
  addedTodo: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case addTodo:
      return { ...state, newTodo: action.payload };
    case newTodo:
      return { ...state, todo: action.payload };
    // case completedTodo:
    //   return { ...state, completed: !state.completed };
    default:
      return state;
  }
}
