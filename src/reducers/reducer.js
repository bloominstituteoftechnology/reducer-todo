
export const initialState = [
    {
      todo: 'Organize Garage',
      completed: false,
      id: 1
     
    },
    {
      todo: 'Do Laundry',
      completed: false,
      id: 2
    },
  ];

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';


  export const taskReducer = (state, action) =>{
    switch (action.type) {
      case ADD_TODO:
        return {
         ...state, addTodo: action.payload
          
        };
      case TOGGLE_TODO: 
       return {
         ...state, completed: !initialState.completed 
       
       };
      case DELETE_TODO:
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...state, complete: false };
          } else {
            return state;
          }
        });

      default:
      return state;
    }
  };





