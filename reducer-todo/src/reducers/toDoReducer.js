export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 1234567
}

export const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    default: 
      return state;
  }
}