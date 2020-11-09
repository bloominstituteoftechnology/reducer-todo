
export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ];

  export const todoReducer = (state, action) => {
    switch(action.type) {
      case "ADD_TASK":
          if(action.payload){
            return [
            ...state, 
            {
                item: action.payload, 
                completed: false,
                id: new Date()
            }
            ]
            }  
            break; 
      case "TOGGLE_TASK":
        return state.map(task => {
          if (task.id === action.payload) {
            return {
              ...task, 
              completed: !task.completed
            }
          }
          return task
        });
        
      case "CLEAR_COMPLETED":
        return state.filter(task => !task.completed);
        
      default:
        return state
    }
  };