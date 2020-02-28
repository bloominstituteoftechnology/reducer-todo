const initialState = {
  items: [
    { todo: "Take out Trash", completed: false, id: 1 },
    { todo: "Wash Dishes", completed: false, id: 2 },
    { todo: "Meal Prep", completed: false, id: 3 },
    { todo: "Learn more Programming", completed: false, id: 4 },
    { todo: "Hit the Gym", completed: false, id: 5 }
  ]
};

export const TodoListReducer = (state = initialState, action) => {
  console.log("Reducer", state, action);
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = { todo: action.payload };
      return {
        ...state,
        items: [...state.items, newItem]
      };

    default:
      return state;
  }
};
