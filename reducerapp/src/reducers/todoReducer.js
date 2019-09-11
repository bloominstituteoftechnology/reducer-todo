export const initialState = {
    todos: [
      {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ],
    task: ''
  }
  
  export const todoReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        // console.log('state in add_todo', state);
        // console.log('action.payload in add_todo', action.payload)
        return {
          ...state,
          todos: [...state.todos, 
            {
              task: action.payload,
              completed: false,
              id: Date.now()
            }
          ]
        }
      case 'TOGGLE_COMPLETED':
        return {
          ...state,
          todos: state.todos.map(todo => 
            todo.id === action.payload ?
              {...todo, completed: !todo.completed}
              : todo
          )
        }
      case 'CLEAR_COMPLETED':
        return {
          ...state,
          todos: state.todos.filter(todo => 
            !todo.completed
          )
        }
      case 'HANDLE_CHANGE':
        return {
          ...state,
          task: action.payload
        }
  
      default:
        return state;
    }
  }