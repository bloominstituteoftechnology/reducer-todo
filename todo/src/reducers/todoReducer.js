import { TOGGLE_TODO, UPDATE_LIST };

const todoReducer = (state, action) => {

  switch (action.type) {
    case TOGGLE_TODO:
    return { ...state, editing: !state.editing };
    case UPDATE_LIST:
    return { ...state, title: action.payload };
    default:
      return state;
  }
}

export default todoReducer;