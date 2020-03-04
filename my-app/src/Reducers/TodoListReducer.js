export const initialState = {
  items: [
    { todo: "Take out Trash", completed: false, id: Date.now() },
    { todo: "Wash Dishes", completed: false, id: Date.now() },
    { todo: "Meal Prep", completed: false, id: Date.now() },
    { todo: "Learn more Programming", completed: false, id: Date.now() },
    { todo: "Hit the Gym", completed: false, id: Date.now() }
  ]
};

export const TodoListReducer = (state = initialState, action) => {
  //console.log("Reducer", state, action);
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [
          ...state.items,
          { todo: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "MARK_DONE":
      console.log(action);
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case "CLEAR_TODO":
      return {
        ...state,
        items: state.items.filter(item => item.completed === false)
      };
    default:
      return state;
  }
};

// let currentState = initialState;
// const dispatch = action => {
//   currentState = TodoListReducer(currentState, action);
// };

// dispatch(addItem);

// console.log("New Todo State", currentState);
