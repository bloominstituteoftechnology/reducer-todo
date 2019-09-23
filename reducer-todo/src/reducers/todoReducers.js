export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };
  
  export const todoReducer = (state, action) => {
      switch(action.type){
          case "ADD_TODO":
              return{
                  ...state,
                  item: action.payload,
                  completed: false,
                  id: Date.now()
              };
          case "TODO_COMPLETE":
              return{
                  ...state,
                  completed: !state.completed
              };
            case "DELETE_TODO":
                return{
                    ...state,
                    item: "",
                    completed: !state.completed
                };
          default:
              return state;
      }
  };