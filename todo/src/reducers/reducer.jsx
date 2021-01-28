
const initialState = {
  todos: [
    { id:0, text: 'Learn how to write reducers.', completed: false },
    { id:1, text: 'Learn Redux.', completed: false },
    { id:2, text: 'Learn how to write psuedo-code before starting to code.', completed: false }
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

//use initialState as a default value
export default function appReducer( state = initialState, action ){
  //reducer will look at the action field to decide what happens
  switch(action.type){
    //different actions
    default:
      //if the reducer doesnt care about the action or just doesnt know what that action 
      return state
  }
}