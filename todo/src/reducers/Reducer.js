export const initialState = {
  //building a reucer with a simple reudcer w/ default return
  todo: [{ item: 'WorkOut', id: Date.now(), completed: false }],
  
}

export function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      //using spread state
      return { ...state, todo: [ ...state.todo, {item: action.payload, id: Date.now(),  completed: false } ] };
    
      case 'descriptionUpdate':
      return { ...state, newTodo: { ...state.todo, list: action.payload } };
    
      case 'TOGGLE_TODO':
      const newArr = state.todo.map((item) => {
        if (item.id === action.payload) {
          
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      });
      return { ...state, todo: newArr };
    
      case 'DELETE_COMPLETED':
      const filterArr = state.todo.filter((item) => {
        if (item.completed !== true) {
          return item;
        }
      });
      return { ...state, todo: filterArr };

    default:
      return state;
  }
}
