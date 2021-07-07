export const initialState = {
  todos: [

    {
      task:'Clean Bathroom',
      id:1528817077286,
      completed: false
    },
    
    {
      task:'Study',
      id:1528817084357,
      completed: false
    }
  ]
};

export function todoReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => (
            todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
          ))
        };
      case 'ADD_TODO':
          return {
            ...state,
            todos: state.todos.concat({item: action.payload, completed: false, id: Date.now()})
          }
      case 'CLEAR_COMPLETED':
          return {
            ...state,
            todos: state.todos.filter(({completed}) => !completed)
          };
          default:
            return state;
       }
    }

 

