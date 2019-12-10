export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 1234567
}]

export const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'CREATE_NOTE':
      return [
        ...state, 
        {item: action.payload,
        completed: false,
        id: Date.now()}
      ]
    default: 
      return state;
  }
}