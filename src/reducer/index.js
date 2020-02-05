export const initialState = {
  tasks: [
    {
      task: "Fix Vehicle",
      id: 1,
      completed: false
    },
    {
      task: "Grab Protien Powder",
      id: 2,
      completed: false
    },
    {
      task: "Pickup Vitamins",
      id: 3,
      completed: false
    },
    {
      task: "Spend Time With Girlfriend",
      id: 4,
      completed: false
    }
  ]
};

export const errandReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          }

          return item;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(item => {
          return !item.completed;
        })
      };

    default:
      return state;
  }
};
