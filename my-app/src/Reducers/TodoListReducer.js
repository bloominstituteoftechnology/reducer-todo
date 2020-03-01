export const initialState = {
  items: [
    { todo: "Take out Trash", completed: false, id: new Date() },
    { todo: "Wash Dishes", completed: false, id: new Date() },
    { todo: "Meal Prep", completed: false, id: new Date() },
    { todo: "Learn more Programming", completed: false, id: new Date() },
    { todo: "Hit the Gym", completed: false, id: new Date() }
  ]
};

export const TodoListReducer = (state = initialState, action) => {
  console.log("Reducer", state, action);
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [
          ...state.items,
          { todo: action.payload, completed: false, id: new Date() }
        ]
      };
    case "MARK_DONE":
      return {
        completed: true
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
