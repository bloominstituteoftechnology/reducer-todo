export const initialState = {
    todo: { item: "", completed: false },
    todos: []
  };
 
  export const reducer = (state, action) => {
    //   console.log(action);
 
    //   console.log("this is state", state);
 
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, { item: action.payload, id: Date.now() }]
        };
 
      case "TOGGLE_COMPLETED":
        //   state.todos.map(elem => console.log(elem));
        return {
          ...state,
          todos: state.todos.map(elem =>
            elem.id === action.payload ? { ...elem, completed: true } : elem
          )
        };
 
      case "CLEAR_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter(elem => elem.completed !== true)
        };
 
      default:
        return state;
    }
  };