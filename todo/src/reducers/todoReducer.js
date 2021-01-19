export const initialState = {
    todoItems: [
      {
        name: "Learn about reducers",
        id: Date.now(),
        completed: false,
      },
    ],
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          todoItems: [
            ...state.todoItems,
            {
              name: action.payload,
              id: Date.now(),
              completed: false,
            },
          ],
        };
      case "TOGGLE_ITEM":
        return {
          ...state,
          todoItems: state.todoItems.map((item) => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            } else {
              return item;
            }
          }),
        };
      case "CLEAR":
        return {
          ...state,
          todoItems: state.todoItems.filter((item) => !item.completed),
        };
      default:
        return state;
    }
  };