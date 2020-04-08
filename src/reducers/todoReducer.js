export const initialState = [
  {
    item: "Dishes",
    completed: false,
    id: Date.now() + Math.random() * 1000,
  },
  {
    item: "Laundry",
    completed: false,
    id: Date.now() + Math.random() * 1000,
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
    default:
      return state;
  }
}
