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
    case 'TOGGLE_COMPLETED':
      let idSelectorArray = state.map(note => {
        if(action.payload === note.id) {
          return {...note, completed: !note.completed}
        } else {
          return note;
        }
      })
      console.log('id selector array from inside toggle completed', idSelectorArray)
      return idSelectorArray;
    default: 
      return state;
  }
}