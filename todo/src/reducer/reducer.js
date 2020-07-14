export const initialState = {
  todo: [{ item: "Learn about reducers", completed: false, id: new Date() }],
};

// state=intialState when you add a = to prop/argument it sets it as a default value
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [
          ...state.todo,
          { item: action.payload, completed: false, id: new Date() },
        ],
      };
    case "TOGGLE_COMPLETE":
      console.log(action.payload);
      return {
        todo: state.todo.map((todo) => {
          console.log(todo.id);
          if (action.payload === todo.id) {
            console.log(todo);
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else return todo;
        }),
      };
      case 'CLEAR':
          return{
              todo: state.todo.filter((todo) => (
                  !todo.completed
              ))
          }

    default:
      return state;
  }
};
