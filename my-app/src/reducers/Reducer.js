
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
        case "AddTodo":
            return [...state,
                {
            
              item: action.payload,
              completed: false,
              id: Date.now()

                }];

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
                     
                    
                
                  
     
    

    default:
            return state;
    }
  };


  