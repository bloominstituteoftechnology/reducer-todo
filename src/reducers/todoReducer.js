export const initialState = [
  {
    item: "Dishes",
    completed: false,
    id: Date.now(),
  },
  {
    item: "Laundry",
    completed: true,
    //to ensure the initial items have different IDs
    id: Date.now() + 1000,
  },
];

export function todoReducer(state, action) {
  switch (action.name) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        },
      ];
    case "TOGGLE_COMPLETED":
      return state.map((x) =>
        x.id !== action.payload
          ? x
          : {
              ...x,
              completed: !x.completed,
            }
      );
    case "CLEAR_COMPLETED":
      return state.filter((x) => !x.completed);
    default:
      throw new Error(`${action.name} is not a recognized action name.`);
  }
}
