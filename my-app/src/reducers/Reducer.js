
//reducer
export const initialState = [
    {
        item: 'Learn about javaScript',
        completed: false,
        id: 1
      },


      {
        item: 'Learn about reducers',
        completed: false,
        id: 2
      },


      {
        item: 'Learn about react',
        completed: false,
        id: 3
      },

      {
        item: 'Learn about ',
        completed: false,
        id: 4
      }


]
    


  export const todoReducer = (state, action) => {
    switch (action.type) {

    default:
            return state;
    }
  };


  