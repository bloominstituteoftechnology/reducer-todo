export const initialState = {
    todos: [],
  }
  
export const reducer = (state, action) => {
    switch(action.type) {
      case "ADD_TODO":
        return {
          todos: [...state.todos, {
            name: action.payload,
            id: new Date(),
            completed: false,
          }]
        }
      case "TOGGLE_COMPLETED":
        return {
          todos: state.todos.map(todo=>{
            if (todo.id === action.payload) {
              return {
                ...todo, completed: !todo.completed
              } 
            } else {
              return todo;
            }
          })
        }
      case "CLEAR_COMPLETED":
        return {
            todos: state.todos.filter(todo=>{
              return !todo.completed
            })
        }
      default:
        return state;
    }
  }
  