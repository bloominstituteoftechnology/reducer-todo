export const initialState = {
    todos: [
        {
            todoitem: "Let's learn reducers!",
            completed: false,
            id: 24601
        }
    ]
  };

  export const reducer = (state, action) => {
      switch(action.type) {
          default: 
            return state;
      }
  }