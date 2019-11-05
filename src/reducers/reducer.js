
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


  export const taskReducer = (state = initialState, action) =>{
    switch (action.type) {
      case ADD_TODO:
        return {
         ...state, addTodo: action.payload
          //if this doesn't work try addTodo: action.payload
          //[action.payload.task]: action.payload.value
        };
      case TOGGLE_TODO: 
       return {
         ...state, completed: !initialState.completed 
         //if this doesn't work try !action.payload.completed
       };
      case DELETE_TODO:
       return { 
      ...state, completed: action.payload//placeholder 
       };

      default:
      return state;
    }
  };





