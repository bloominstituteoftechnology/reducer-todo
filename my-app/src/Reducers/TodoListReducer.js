export const initialState = {
  items: [
    { todo: "Take out Trash", completed: false, id: 1 },
    { todo: "Wash Dishes", completed: false, id: 2 },
    { todo: "Meal Prep", completed: false, id: 3 },
    { todo: "Learn more Programming", completed: false, id: 4 },
    { todo: "Hit the Gym", completed: false, id: 5 }
  ]
};

// const addItem = {
//   type: "ADD_ITEM",
//   payload: "Clean Bathroom"
// };

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
