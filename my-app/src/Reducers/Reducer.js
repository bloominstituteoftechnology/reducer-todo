export const initialState = [
  {
    todo: "",
    completed: false,
    id: new Date()
  }
];
export const TodoReducer = (state, action) => {
  switch (action.type ) {//switch routes each case connected to each respective fuction located throughout the application
    //action.type allowes us to play with incoming state from that is assign in the dispatch
    // payload = form state inside todoForm.js in the addItem function
    case "TODO_ADD":{ // 
        console.log(state)
      return [...state, {
        todo: action.payload,
        completed: false,
        id: new Date()

      },
      ];

    }
    
    case "COMPLETED_TODO":

      // return {
      //   ...state,
      //    todos:
      //   state.id.map(item => {
      //      item.id === action.payload
      //       ? { ...item, completed: !item.completed }
      //       : item;
      //   })
      // }
    // case "CLEAR_DONE":
    //   return state.filter(item => !item.completed);

    default:
      return state;
  }
};
