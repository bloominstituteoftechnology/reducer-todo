export const initialState = {
  tasks: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  // action is a built in object that REQUIRES a type property and has an optional payload/data property
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, tasks: [...state.tasks, newTodo] };

    case "TOGGLE_TODO":
        // const toggle = state.tasks.map(item => {
        //     if (item.id === action.payload)
        // })
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          else {
            return item;
          }
        })
      };

    case "CLEAR_COMPLETED":
      return { ...state, tasks: state.tasks.filter(item => !item.completed) };
    default:
      return state;
  }
};
