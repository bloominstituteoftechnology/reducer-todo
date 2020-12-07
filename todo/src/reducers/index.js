import { setTodo, setNewTodoText } from "../actions/index";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case setTodo:
      return { ...state, item: action.payload };
    case setNewTodoText:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
