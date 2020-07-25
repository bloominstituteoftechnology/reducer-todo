export const initialState = [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
}]

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const todoReducer = (state, action) => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_COMPLETED:
      return state.map((todo) => {
        return (
          (todo.id === action.payload) ?
          {
            ...todo,
            completed: !todo.completed
          } :
          todo
        )
      })
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed)

    default:
      return state
  };
}