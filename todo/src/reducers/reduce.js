export const initialState = [
    {
      item: "Learn about reducers",
      complete: false,
      id: 3892987589,
    },
  ];
  
  export function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: new Date(),
          },
        ];
  
      case "TOGGLE_TODO":
        return state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          } else {
            return item;
          }
        });
      case "CLEAR_TODO":
        return state.filter((item) => item.completed === false);
    }
  }