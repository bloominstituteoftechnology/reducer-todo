export const initialState = [
  {
    item: "this is a test",
    done: false,
    id: new Date(),
  },
];

export const reducer = (state, action) => {
  console.log("adding should work");
  switch (action.type) {
    case "TOGGLE":
      const id = action.payload;
      const newState = state.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, done: !todoItem.done };
        } else {
          return todoItem;
        }
      });
      return [...newState];
    case "CLEAR_COMPLETED":
      return [...state.filter((todoItem) => todoItem.done === false)];
    case "CLEAR_TODOS":
      return [];
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          done: false,
          id: new Date(),
        },
      ];
    default:
      return state;
  }
};
