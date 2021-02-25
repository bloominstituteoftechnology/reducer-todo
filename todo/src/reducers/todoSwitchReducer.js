export const initialState = [
  {
    task: 'Organize The Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Keep Calm',
    id: 2,
    completed: false
  }
];

export const todoReducer = (state, action) => {

  switch(action.type) {
      case('ADD_TODO'):
          return [...state,
              {
                  task: action.payload,
                  id: Date.now(),
                  completed: false
              }]
      case('TOGGLE_EDITING'):
          return state.map(item => {
              if(item.id === action.payload) {
                  return {
                      ...item,
                      completed: !item.completed
                  }
              } else {
                  return item
              }
          })
      case('CLEAR_COMPLETED'):
          return state.filter(item => !item.completed)
      default:
          return state
  }
}