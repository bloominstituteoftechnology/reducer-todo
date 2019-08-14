export const initialState = {
  todos: [
    {
      item: "Mow the lawn",
      completed: false,
      id: 3892987589
    },
    {
      item: "Get a haircut",
      completed: false,
      id: 3892987564
    }
  ]
};

export const ListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      };
  }
};
