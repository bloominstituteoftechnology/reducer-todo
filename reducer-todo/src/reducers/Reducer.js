//reducer
export const initialState = {
    title: "Let's learn reducers!",
    editing: false
  };



  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_EDITING":
        return {
            item: 'Learn about reducers',
            completed: false,
            id: 1
          }
      case "UPDATE_TITLE":
        return {
            item: 'Learn about react',
            completed: false,
            id: 2
          }
      default:
        return state;
    }
  };