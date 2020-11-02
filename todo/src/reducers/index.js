export const initialState = {
  todo: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 1
    },
  ]
}

let nextId = 2;

export function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      nextId++
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            item: action.payload,
            completed: false,
            id: nextId
          }
        ]
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todo: state.todo.map(item => {
          if( item.id === +action.payload) {
            return { ...item, completed: !item.completed}
          }
          return item
        })
      }
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todo: state.todo.filter(item => !item.completed)
      }
    default:
      return state
  }
}