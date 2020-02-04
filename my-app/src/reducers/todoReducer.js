export const initialTodos = [
    {
    item: "Learn about reducers",
    completed: false,
    id: 143849304
  },
  {
    item: "Exercise",
    completed: false,
    id: 385048380
  }
];

  export const toDoReducer = (todos, action) => {
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return {
            ...todos,
            completed: !todos.completed
        };
      case "ADD_TASK":
        return {
          ...todos,
          item: action.payload,
          completed: false,
          id: new Date()
          };
      default:
        return todos;
    }
  };