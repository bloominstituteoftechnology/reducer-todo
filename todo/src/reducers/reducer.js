const reducer = (state, action) => {
    switch (action.type) {
      case("ADD_TODO"):
        return({todos:[...state.todos, text:action.text, completed: false]});
      case("TOGGLE_TODO"):
        return {
          todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
  
        };
        case("DELETE_TODO"):
          return {
            todos: state.todos.filter((t) => !t.completed)
          };
  
      default:
        return(state);
    }
  }

  export default reducer;