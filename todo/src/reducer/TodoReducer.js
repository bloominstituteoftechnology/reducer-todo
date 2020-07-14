export const initialList = {
    todo: [
      {
        what: 'Learn about reducers',
        id: 1,
        finished: false
      }
    ]
  }
  
  export const reducer = (state, action) => {
  
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          todo: [...state.todo,
          {
            what: action.payload,
            id: Date.now(),
            finished: false
          }
          ]
        }
      case 'CLEAR_ALL':
        return {
          ...state,
          todo: state.todo.filter(item => !item.finished)
        }
      case 'TOGGLE_IT':
        return {
          ...state,
          todo: state.todo.map(item => {
            if (action.payload === item.id) {
              return {
                ...item,
                finished: !item.finished
              }
            }
            return {
              ...item
            }
          })
  
        }
      default:
        return state;
    }
  
  }; 