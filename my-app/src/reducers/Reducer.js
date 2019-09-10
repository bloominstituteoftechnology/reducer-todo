
//reducer
export const initialState = {
    title: "Let's learn reducers!",
    completed: false
  };



  export const todoReducer = (state, action) => {
    switch (action.type) {

        case "one":
                return {
                    ...state,
                    item: 'Learn about CSS',
                    completed: false,
                    id: 1
                  }

      case "TOGGLE_EDITING":
        return {
            ...state,
            item: 'Learn about react',
            completed: false,
            id: 2
          }
      case "UPDATE_TITLE":
        return {
            ...state,
            item: 'Learn about Reducers',
            completed: false,
            id: 3
          }
      default:
        return state;
    }
  };


  