export const initialList = {
    todo: [
        {
                task: 'Type up Notion Notes',
                id: 1,
                completed: false
              },
              {
                task: 'Wes Bos Javascript30',
                id: 2,
                completed: false
              },
              {
                task: 'Go Back and do stretches on assignments and sprints',
                id: 3,
                completed: false
              },
              {
                task: 'Study Notion Notes',
                id: 4,
                completed: false
              },
              {
                task: 'Practice',
                id: 5,
                completed: false
              },
              {
                task: 'Do Hack Challenges',
                id: 6,
                completed: false
              },
  
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
                    task:action.payload,
                    id: Date.now(),
                    completed: false
                }
            ]
        }
      case 'CLEAR_ALL':
          return{
              ...state,
              todo: state.todo.filter(item => !item.completed)
          }
      case 'TOGGLE_IT':
           return{
                ...state,
               todo: state.todo.map(item =>{
                   if(action.payload === item.id){
                       return{
                           ...item,
                           completed: !item.completed
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