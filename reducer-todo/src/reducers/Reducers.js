import react from 'react'

const Reducers = (state, action) => {
    return action(state)
}

const initialState = [ {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
  item: 'reach mvp',
  completed: false,
  id: 3892987590
}


]
  export default {initialState, Reducers}