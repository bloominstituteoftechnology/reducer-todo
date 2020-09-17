export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

export const Reducer = (state= initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          item: action.payload,
          completed: false,
          id: Date.now()
        };
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                state.map((task, index) => {
                if (index === action.payload) {
                  return {
                    ...state,
                  completed: !state.completed  
                  }
                } 
            }
          }
        case "CLEAR_COMPLETED":
            return {
              ...state,
              state.filter((task) => {
                if (task !== action.payload) {
                  return {
                    ...state
                  }
                }
              })
            }
      default:
        return state;
    }
  };