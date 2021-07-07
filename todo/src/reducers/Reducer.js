export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 1
}

export const todoReducer = (state, action) => {
  switch(action.type){
    case "SET_TODO":
      return { ...state, title: action.payload };
    default:
      return state;
  }
}

todoReducer(initialState, { type:"SET_TODO" })