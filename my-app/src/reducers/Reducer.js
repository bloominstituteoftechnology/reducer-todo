
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
        item: 'Learn CSS',
        completed: false,
        id: 4
      }


]
    


  export const todoReducer = (state, action) => {
    switch (action.type) {

// ADD TODO

        case "AddTodo":
            return [...state,
                {
            
              item: action.payload,
              completed: false,
              id: Date.now()

                }];


// TOGGLE TODO

        case "Toggle":

            let Clicktoggle =

            state.map(item => {
                    if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                        }
                      } else {
                        return item;
                      }
                      });
                      return Clicktoggle;
                     
                    
// SUBTRACT TODO

        case "SubtractTodo":
       let Subtract =
       state.filter(item => {
           if (item.completed === true) {
               return !item.completed
           }else{
               return item
           }
           }
       )
       return Subtract;           


     
    

    default:
            return state;
    };
  


}