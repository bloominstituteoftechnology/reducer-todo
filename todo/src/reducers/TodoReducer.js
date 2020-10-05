export const initialState = {
  todo: "Todo's Here",
  editing: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EDITING":
      return {
        ...state,
        editing: !state.editing,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.payload,
        editing: false,
      };
    default:
      return state;
  }
};
