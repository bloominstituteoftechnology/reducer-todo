export const initialState = [
    {
     item: 'Learn about reducers',
     completed: false,
     id: 3892987589
    }
]

export const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "ADD_TODO":
        const newItem = {
          item: action.payload,
          completed: false,
          id: Date.now()
        };
        return [
          ...state,
          newItem
        ];
      case "TOGGLE_COMPLETED":
        return state.map(item => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        });
      case "CLEAR_COMPLETED":
        return state.filter(item => !item.completed);
  
      default:
        return state;
    }
  };