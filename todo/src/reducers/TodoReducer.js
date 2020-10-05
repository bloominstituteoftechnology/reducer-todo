export const initialState={
    todos:[],
  
  }
  
  export const reducer=(state,action)=>{
  
      switch(action.type){
  
      case 'ADD_TODO':
          return{
              ...state,
              todos:[...state.todos,
                   action.payload]
          }
  
      case 'TOGGLE_TODO':
  
          return{
              ...state,
              todos: state.todos.map(todoItem=>{
              
                  if(todoItem.todo.id===action.payload){
                    return{
                       ...todoItem,
                       todo: Object.assign(todoItem.todo,{completed: !todoItem.todo.completed
                       })
                      }
                     
                  }
                  else{
                    return todoItem
                  }
              })
              }
  
      case 'REMOVE_COMPLETED':
      return{
          ...state,
          todos: state.todos.filter(todoItem=>{
              return todoItem.todo.completed===false;
            })
      }
  
      default:
          return state;
      }
  
  }