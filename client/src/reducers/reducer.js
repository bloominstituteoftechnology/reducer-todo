//build initial state object that has a list of 
//todos and export initial state object
export const initialState = [{
   item: 'Learned about reducers',
   completed: false,
   id: new Date()
}]


//export reducer
export function reducer(state, action){
   switch(action.type) {
      case "TOGGLE_COMPLETED":
         return state.map(item => {
            if(item.id === action.payload)
            {
               return {
                  ... item,
                  completed: !item.completed
               }
            }
         });
      case "ADD_ITEM":
         return {
            ...state,
            item: action.payload,
            completed: false,
            id: Date.now()
         };
         
      case "REMOVE_COMPLETED":
         return state.filter(item => !item.completed)

      //default
      default:
         return state;
   }
}

