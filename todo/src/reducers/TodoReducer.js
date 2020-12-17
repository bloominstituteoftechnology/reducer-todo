import { TOGGLE_EDITING, UPDATE_TITLE} from './../actions/todoActions';

const TodoReducer = (state, action) => {
  switch(action.type) {
    case(TOGGLE_EDITING):
      console.log("toggle editing case in the todoReducer");
      return {...state, editing: !state.editing};
    case(UPDATE_TITLE):
      console.log("update title case in the todoReducer");
      return {...state, editing: false, title: action.payload};
    default:
      return state;
  }
}

export default TodoReducer;