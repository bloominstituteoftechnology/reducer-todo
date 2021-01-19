export const initialState = {
  toDoList: [{
    item: 'example item',
    id: 0,
    completed: false
  }],
  inputValue: '',
}

const reducer = (state, action) => {
  switch(action.type) {
    case('SET_TO_DO_LIST'):
      return ({...state, toDoList: action.payload});
    case('SET_INPUT_VALUE'):
      return ({...state, inputValue: action.payload});
    default: 
      return state;
  }
}

export default reducer;