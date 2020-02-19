export const initialState = [{
    
    item: "Finish Project",
    completed: false,
    id: Date.now()
  },
]

export const reducer = (state, action) => {
  switch(action.type){
      case 'ADD_TODO':
          const newTodo = {
              item: action.payload,
              completed: false,
              id: Date.now()
          }
          return[
              ...state, newTodo]
      case 'DELETE_TODO':
          return state.filter(e => !e.completed);
      
      case 'TOGGLE_COMPLETED':
          return state.map(e => e.id === action.id ? {...e, completed: !e.completed} : e)
      
          default:
      return state;
      };   
};
            




            