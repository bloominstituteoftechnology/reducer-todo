export const initialList = {
    todo: [
  {
    what: "Code 2 hours besides school",
    id: 1,
    finished: false
  },
  {
    what: "Work Out",
    id: 5,
    finished: false
  },
  {
    what: "Finish Project",
    id: 6,
    finished: false
  },
  {
    what: "REST",
    id: 7,
    finished: false
  }
]}

export const reducer = (state, action) => {
    // switch statement - simplified if/else if/ ... /else statement
    // if or else if blocks become "cases"
    // console.log("STATE",state)
    switch (action.type) {
      case 'ADD_TASK':
          console.log("action.payload",action)
        //   console.log("state",state)
        return {
            ...state,
            todo: [...state.todo,
                {
                    what:action.payload,
                    id: Date.now(),
                    finished: false
                }
            ]
        }
      case 'CLEAR_ALL':
          return{
              ...state,
              todo: state.todo.filter(item => !item.finished)
          }
      case 'TOGGLE_IT':
           return{
                ...state,
               todo: state.todo.map(item =>{
                   if(action.payload === item.id){
                       return{
                           ...item,
                           finished: !item.finished
                       }
                   }
                   return{
                           ...item
                         }
               })
             
            }
  
      default:
        return state;
    }
    
  };