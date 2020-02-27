export const initialState = {
  todos: [
    { item: "Learn about reducers", complete: false, id: 1 },
    { item: "figure out how this relates to Redux", complete: false, id: 2 }
  ]
};

export const todoReducer = (state, action) => {
  console.log("todo array", state.todos);
  return state;
};
