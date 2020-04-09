//export reducer
export function reducer(state, action){
   switch(action.type) {
      case "TOGGLE_EDITING":
         return {
            state,
            completed: !state.completed
         }
      case "UPDATE_ITEM":
         return {
            ...state,
            item: action.payload
         };

      default:
         return state;

   }
}

//build initial state object that has a list of 
//todos and export initial state object
export const initialState = [{
   item: 'Learned about reducers',
   completed: false,
   id: new Date()
}]