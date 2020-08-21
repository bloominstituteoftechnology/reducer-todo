const initialToDos = [
  {
    item: 'Hat',
    completed: false,
    id: 1528817077286
  },
  {
    item: 'Hoodie',
    completed: false,
    id: 1528817084358
  }
];

export const initialState = {
  todos: initialToDos
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return {todos: [...state.todos, {item: action.payload, id: new Date()}]};
    case "TOGGLE_COMPLETED":
      return {todos: state.todos.map(item => {
        if (item.id === action.payload) {
          return {...item, completed: !item.completed};
        } else {
          return item;
        }
      })};
    case "CLEAR_COMPLETED":
        return {todos: state.todos.filter(item => !item.completed)};
    default:
      return state;
  }
};