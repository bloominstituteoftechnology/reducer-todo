export const initialState = {
    todos: [
      {
        task: "Example Todo",
        completed: false,
        id: 386457474574
      }
    ],
    task: ""
  };

   export function todoReducer(state, action) {
    // Target action type
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return {
          // Always spread state
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      case "ADD_TODO":
        return {
          // Always spread state
          ...state,
          todos: state.todos.concat({
            task: action.payload,
            completed: false,
            id: Date.now()
          }),
          task: ""
        };
      case "CLEAR":
        return {
          // Always spread state
          ...state,
          todos: state.todos.filter(({ completed }) => !completed)
        };
      case "UPDATE":
        return {
          // Always spread state
          ...state,
          task: action.payload
        };
      default:
        return state;
    }
  } 