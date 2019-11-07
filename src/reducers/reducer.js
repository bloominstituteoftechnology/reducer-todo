

export const initialState = [
    {
      item: 'Organize Garage',
      completed: false,
      id: 1
     
    },
    {
      item: 'Do Laundry',
      completed: false,
      id: 2
    },
  ];

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';


  export const taskReducer = (state= initialState, action) =>{
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          { item: action.payload, completed: false, id: Date.now() }
        ];
      case TOGGLE_TODO: 
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      case DELETE_TODO:
        return state.filter(todo => !todo.completed);
    default:
      return state;

    }
  };





